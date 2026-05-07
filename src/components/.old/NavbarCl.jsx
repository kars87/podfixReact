import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
  
];

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-950/20 bg-opacity-95 backdrop-blur-sm flex items-center justify-between px-7 shadow-lg">
      <span className="text-stone-200 text-sm font-bold uppercase tracking-widest">Podfix</span>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none"
      >
        <span
          className={`block h-0.5 w-6 bg-stone-200 rounded-full transition-all duration-300 ease-in-out ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 bg-stone-200 rounded-full transition-all duration-300 ease-in-out ${
            open ? "w-0 opacity-0" : "w-[18px] opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-stone-200 rounded-full transition-all duration-300 ease-in-out ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>
    </nav>
    {/* Backdrop */}
    <div
      onClick={() => setOpen(false)}
      aria-hidden="true"
      className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
        open ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    />
    {/* Drawer */}
    <div
      role="dialog"
      aria-label="Navigation"
      className={`fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] w-72 bg-stone-900 border-l border-stone-700/40 flex flex-col px-8 py-10 transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col">
        {navLinks.map((link, i) => (
          <li
            key={link.label}
            className={`transition-all duration-300 ${
              open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
            }`}
            style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
          >
            <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-xl text-stone-400 border-b border-stone-700/40 hover:text-stone-100 hover:pl-2 transition-all duration-200 tracking-wide"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-auto text-xs uppercase tracking-widest text-stone-600">
        © 2026 Podfix. All rights reserved.
      </div>
    </div>
    </>
  );
}
