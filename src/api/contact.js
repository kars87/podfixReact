// Contact API client.
// TODO(backend): replace stub with real fetch/axios call to the contact endpoint.
//   POST /api/contact   { name, email, message }   -> { ok }

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export async function sendContactMessage({ name, email, message }) {
  // TODO(backend): swap this stub for a real fetch.
  // const response = await fetch(`${API_BASE_URL}/api/contact`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ name, email, message }),
  // });
  // if (!response.ok) {
  //   const message = await response.text();
  //   throw new Error(message || 'Failed to send message');
  // }
  // return response.json();

  await new Promise((r) => setTimeout(r, 600));
  return { ok: true, name, email, message, baseUrl: API_BASE_URL };
}
