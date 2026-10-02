<?php
/**
 * Bhavani Group of Institutions — form mailer for Hostinger.
 *
 * Receives JSON from the Contact and Franchise forms and emails it to the
 * centre's inbox using PHP mail(). Sits in public_html alongside index.html.
 *
 * ── To change where enquiries go, edit $TO below. ──
 */

// ====== SETTINGS — edit these ======
$TO        = 'contact@bhavaniedutech.com';      // where enquiries are delivered
$FROM      = 'contact@bhavaniedutech.com';       // must be a real mailbox on this domain
$SITE_NAME = 'Bhavani Group of Institutions';
// ===================================

header('Content-Type: application/json; charset=utf-8');

// Only allow POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Read JSON body.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request']);
    exit;
}

// Honeypot: bots fill hidden "bot-field"; humans leave it empty.
if (!empty($data['bot-field'])) {
    echo json_encode(['ok' => true]); // silently accept, send nothing
    exit;
}

// Helper: clean a value for safe inclusion in an email.
function clean($v) {
    return trim(str_replace(["\r", "\n"], ' ', (string) $v));
}

$formName = clean($data['formName'] ?? 'contact');
$name     = clean($data['name'] ?? '');
$email    = clean($data['email'] ?? '');
$phone    = clean($data['phone'] ?? '');

// Basic validation.
if ($name === '' || ($email === '' && $phone === '')) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please fill in your name and contact details.']);
    exit;
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please enter a valid email address.']);
    exit;
}

// Build the email body from every submitted field (except internal ones).
$skip  = ['formName', 'bot-field'];
$lines = [];
foreach ($data as $key => $value) {
    if (in_array($key, $skip, true)) continue;
    $label = ucwords(str_replace(['_', '-'], ' ', $key));
    $lines[] = $label . ': ' . clean($value);
}
$body = "New " . ($formName === 'franchise' ? 'franchise' : 'contact') . " enquiry from the website:\n\n"
      . implode("\n", $lines)
      . "\n\n— Sent from " . $SITE_NAME . " website";

$subject = ($formName === 'franchise' ? 'Franchise enquiry' : 'Website enquiry') . ' — ' . ($name !== '' ? $name : 'New lead');

// Headers. Reply-To is the visitor so you can reply directly.
$headers  = 'From: ' . $SITE_NAME . ' <' . $FROM . ">\r\n";
if ($email !== '') {
    $headers .= 'Reply-To: ' . $email . "\r\n";
}
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$sent = @mail($TO, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail could not be sent. Please call or WhatsApp us.']);
}
