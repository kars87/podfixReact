import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Work", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "#f5f0eb" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 64px;
          background: #1a1410;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          z-index: 100;
          box-shadow: 0 2px 16px rgba(0,0,0,0.18);
        }

        .logo {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #e8d9c0;
          text-transform: uppercase;
        }

        .hamburger {
          width: 40px;
          height: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .hamburger:hover { background: rgba(232,217,192,0.1); }

        .bar {
          display: block;
          width: 24px;
          height: 2px;
          background: #e8d9c0;
          border-radius: 2px;
          transition: transform 0.35s cubic-bezier(.77,0,.18,1),
                      opacity 0.25s ease,
                      width 0.3s ease;
          transform-origin: center;
        }
        .bar.mid { width: 18px; }

        .open .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .open .bar:nth-child(2) {
          opacity: 0;
          width: 0;
        }
        .open .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
          width: 24px;
        }

        /* Overlay */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0);
          pointer-events: none;
          z-index: 90;
          transition: background 0.35s ease;
        }
        .overlay.visible {
          background: rgba(0,0,0,0.45);
          pointer-events: auto;
        }

        /* Drawer */
        .drawer {
          position: fixed;
          top: 64px;
          right: 0;
          width: 280px;
          height: calc(100vh - 64px);
          background: #1a1410;
          z-index: 95;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(.77,0,.18,1);
          display: flex;
          flex-direction: column;
          padding: 40px 32px;
          border-left: 1px solid rgba(232,217,192,0.12);
        }
        .drawer.open {
          transform: translateX(0);
        }

        .nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .nav-item {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .drawer.open .nav-item { opacity: 1; transform: translateX(0); }
        .drawer.open .nav-item:nth-child(1) { transition-delay: 0.08s; }
        .drawer.open .nav-item:nth-child(2) { transition-delay: 0.13s; }
        .drawer.open .nav-item:nth-child(3) { transition-delay: 0.18s; }
        .drawer.open .nav-item:nth-child(4) { transition-delay: 0.23s; }
        .drawer.open .nav-item:nth-child(5) { transition-delay: 0.28s; }

        .nav-link {
          display: block;
          padding: 14px 0;
          font-size: 1.35rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: #c4b49a;
          text-decoration: none;
          border-bottom: 1px solid rgba(232,217,192,0.08);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .nav-link:hover {
          color: #e8d9c0;
          padding-left: 8px;
        }
        .nav-item:last-child .nav-link { border-bottom: none; }

        .drawer-footer {
          margin-top: auto;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: rgba(196,180,154,0.35);
          text-transform: uppercase;
        }

        /* Page content */
        .page {
          padding-top: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          flex-direction: column;
          gap: 12px;
        }
        .page h1 {
          font-size: 2rem;
          color: #1a1410;
          font-weight: 400;
          letter-spacing: 0.06em;
        }
        .page p {
          color: #7a6a58;
          font-size: 0.95rem;
          letter-spacing: 0.03em;
        }
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <span className="logo">Studio</span>
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="bar" />
          <span className="bar mid" />
          <span className="bar" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`overlay ${open ? "visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`drawer ${open ? "open" : ""}`} role="dialog" aria-label="Navigation">
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.label} className="nav-item">
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="drawer-footer">© 2026 Studio</div>
      </div>

      {/* Page */}
      <main className="page">
        <h1>Hamburger Menu</h1>
        <p>Click the icon in the top-right to open the drawer.</p>
      </main>
    </div>
  );
}
