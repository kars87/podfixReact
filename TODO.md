# podfix landing page – TODO

Tracks what's done and what's left. Update as work progresses.

## Done this session

- [x] Cleaned up stray outer `node_modules` / `package.json` at repo root; project lives under `mylandingpage/`.
- [x] Installed `tailwindcss` and `@tailwindcss/vite` as devDependencies inside the project.
- [x] Rewrote `Contact.jsx` to plain Tailwind (no more `@/components/base/...` imports from Untitled UI).
- [x] Added `id="contact"` to the Contact section so navbar `#contact` link scrolls to it.
- [x] Added open / close functionality on the Contact card (X button + reopen button).
- [x] Wired Navbar "Contact" link to dispatch `open-contact` custom event.
- [x] Created `LogIn.jsx` modal (Esc / backdrop / X to close).
- [x] Wired Navbar "Log In" buttons (desktop + mobile) to dispatch `open-login`.
- [x] Created `Dashboard.jsx` placeholder; `App.jsx` swaps to it after login.
- [x] Added `id="features"` to Features section and converted Pricing wrapper to `<section id="pricing">` so navbar links work.
- [x] Pricing card "Get Started" buttons dispatch `open-login` with `mode: 'signup'` and the plan name.
- [x] Hero "Get Started" button dispatches `open-login` with `mode: 'signup'`.
- [x] Added Sign Up mode to LogIn modal (name field, mode toggle, dynamic title/button).
- [x] Created `src/api/auth.js` and `src/api/contact.js` stubs with `TODO(backend)` markers.
- [x] LogIn and Contact forms now call api stubs with `isSubmitting` + `errorMessage` states.
- [x] Added `cursor-pointer` to every clickable `<button>` across the app.

## Backend integration (next)

- [ ] Decide backend stack (Node/Express, Next.js API routes, Supabase, Firebase, etc.).
- [ ] Set `VITE_API_BASE_URL` in `mylandingpage/.env` (and add `.env.example`).
- [ ] In `src/api/auth.js`: replace stub bodies in `signIn`, `signUp`, `signOut` with real `fetch` calls.
- [ ] In `src/api/contact.js`: replace stub body in `sendContactMessage` with a real `fetch` call.
- [ ] Decide where to store the auth token (likely `localStorage` + a small `useAuth` hook / Context).
- [ ] Add a `requireAuth` guard so `Dashboard` can't be reached without a valid session.
- [ ] Persist auth state across page reloads (currently a refresh sends user back to landing).
- [ ] Implement password reset flow ("Forgot password?" link in LogIn modal).
- [ ] Implement email verification flow on sign up (if needed).
- [ ] Hook Pricing "Get Started" through to a real checkout (Stripe Checkout, Lemon Squeezy, etc.); pass the selected `plan` name into the signup → checkout pipeline.

## Routing

- [ ] Decide if real URLs are needed (e.g. `/dashboard`, `/login`, `/signup`). If yes:
  - [ ] `npm install react-router-dom`.
  - [ ] Replace the `view` state in `App.jsx` with `<BrowserRouter>` + `<Routes>`.
  - [ ] Convert the `navigate-dashboard` custom event into a `useNavigate('/dashboard')` call.
  - [ ] Update LogIn so Sign Up / Sign In become routes (or keep as a modal — both are valid).

## Content / design polish

- [ ] Pricing: replace the three identical placeholder plans with real tiers (different names, prices, feature lists, recommended badge on one).
- [ ] Hero: review copy, add a sub-headline / CTA secondary button.
- [ ] Features: review copy and confirm the icons match each feature.
- [ ] Contact card title was edited to use the original subtitle as the heading; consider adding a short descriptive subtitle back below it.
- [ ] Footer is currently bare — add columns (product / company / legal), social links, newsletter signup if desired.
- [ ] Add a real logo (currently `public/logo.png` rendered with `filter invert`).
- [ ] Add a favicon and proper `<title>` / meta tags in `index.html`.
- [ ] Add Open Graph / Twitter card meta tags for link previews.

## Accessibility

- [ ] Add visible focus rings to buttons and inputs (currently `focus:outline-none` strips them — replace with `focus-visible:ring-2 focus-visible:ring-blue-500`).
- [ ] When LogIn modal opens, trap focus inside the modal and return focus to the trigger on close.
- [ ] Confirm color contrast meets WCAG AA on `text-white/40`, `text-white/60`, `text-white/70` against `bg-slate-900` / `bg-slate-950`.
- [ ] Add `aria-live="polite"` region for the "Thanks! Your message has been sent." confirmation.
- [ ] Honor `prefers-reduced-motion` for the Hero radial-gradient mouse tracking.

## Code quality / cleanup

- [ ] Remove the duplicate `document.removeEventListener('mousedown', handleClickOutside)` in `Navbar.jsx` cleanup function.
- [ ] Consider extracting the `CustomEvent` names (`open-contact`, `open-login`, `navigate-dashboard`) to a shared constants file to avoid typos.
- [ ] Consider replacing the `CustomEvent` pub/sub with React Context once login state needs to be shared more broadly (e.g. Navbar showing user avatar after login).
- [ ] Add ESLint rule / prettier config check to standardize on single vs. double quotes (currently mixed).
- [ ] Remove `<augment_code_snippet>` artifacts from any in-file documentation if added later.

## Testing

- [ ] Add Vitest + React Testing Library setup.
- [ ] Tests for Contact form: submits, shows loading, shows error on rejection, shows success message.
- [ ] Tests for LogIn modal: opens/closes, switches between sign-in and sign-up, calls correct api function, shows error.
- [ ] Tests for Navbar event dispatch (Contact / Log In / mobile menu close-on-click).
- [ ] Smoke test for Pricing → Get Started → LogIn modal opens in signup mode with the right plan in the title.

## Deployment

- [ ] Set up hosting (Vercel / Netlify / Cloudflare Pages).
- [ ] Configure environment variables in the host (`VITE_API_BASE_URL`).
- [ ] Set up CI to run `npm run build` and `npm run lint` on PRs.
- [ ] Add a custom domain.
