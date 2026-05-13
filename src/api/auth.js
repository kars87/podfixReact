// Auth API client.
// TODO(backend): replace stubs with real fetch/axios calls to the auth service.
// Recommended endpoints:
//   POST /api/auth/sign-in   { email, password }            -> { token, user }
//   POST /api/auth/sign-up   { name, email, password, plan } -> { token, user }
//   POST /api/auth/sign-out

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

async function request(path, body) {
  // TODO(backend): swap this stub for a real fetch.
  // const response = await fetch(`${API_BASE_URL}${path}`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(body),
  // });
  // if (!response.ok) {
  //   const message = await response.text();
  //   throw new Error(message || 'Request failed');
  // }
  // return response.json();

  await new Promise((r) => setTimeout(r, 600));
  return { ok: true, path, body, baseUrl: API_BASE_URL };
}

export function signIn({ email, password }) {
  return request('/api/auth/sign-in', { email, password });
}

export function signUp({ name, email, password, plan }) {
  return request('/api/auth/sign-up', { name, email, password, plan });
}

export function signOut() {
  return request('/api/auth/sign-out');
}
