// Submits a form to the PHP mailer (send.php) that ships in the build and
// runs on Hostinger. It emails the enquiry to the centre's inbox.
//
// In local dev there is no PHP runtime (Vite serves static files only), so we
// short-circuit to success — this keeps the confirmation UI testable without
// a server. On the deployed site the real POST to /send.php runs.
export async function submitForm(formName, data) {
  if (import.meta.env.DEV) {
    await new Promise((r) => setTimeout(r, 400)) // mimic a network round-trip
    return { ok: true }
  }

  const res = await fetch('/send.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formName, ...data }),
  })

  let json = {}
  try {
    json = await res.json()
  } catch {
    // non-JSON response (e.g. a server error page)
  }
  if (!res.ok || !json.ok) {
    throw new Error(json.error || 'Something went wrong. Please try again.')
  }
  return json
}
