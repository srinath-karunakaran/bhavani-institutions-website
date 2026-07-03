// Submits form data to Netlify Forms. On the deployed Netlify site this
// delivers the enquiry (viewable in the Netlify dashboard / emailed to the
// client). In local dev the POST to "/" is harmless — the form still resolves
// so the success UI shows during development.
export async function submitToNetlify(formName, data) {
  const body = new URLSearchParams({ 'form-name': formName, ...data }).toString()
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
  } catch {
    // Ignore network errors in dev / offline — the user still sees confirmation.
  }
}
