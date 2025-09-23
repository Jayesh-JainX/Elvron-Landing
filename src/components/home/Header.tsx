import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
type NavItem = {
  label: string;
  href: string;
};
type Props = {
  nav?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};
const DEFAULT_NAV: NavItem[] = [
  { label: "Products", href: "/" },
  { label: "Token", href: "/" },
  { label: "Ecosystem", href: "/" },
  { label: "Resources", href: "/" },
  { label: "About", href: "/" },
  { label: "Compute App", href: "/" },
];
const isExternal = (href: string) => /^https?:\/\//i.test(href);
const Header: React.FC<Props> = ({
  nav = DEFAULT_NAV,
  ctaLabel = "JOIN NOW",
  ctaHref = "#join-now",
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLAnchorElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement | null>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = original || "";
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setOpen(false);
        btnRef.current?.focus();
      } else if (e.key === "Tab") {
        const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          (last as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey, true);

    setTimeout(() => {
      (firstFocusableRef.current || drawerRef.current)?.focus();
    }, 0);
    return () => document.removeEventListener("keydown", handleKey, true);
  }, [open]);
  const navItems = useMemo(() => nav, [nav]);
  const closeOnBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
      btnRef.current?.focus();
    }
  };
  return (
    <header
      className={`header-root ${className}`}
      role="banner"
      aria-label="Site header"
    >
      <div className="header-outer">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Homepage">
            <img className="brand-logo" src="/header/logo.png" alt="Brand" />
          </Link>
          <div className="end-group">
            <nav className="nav" aria-label="Primary">
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.href} className="nav-li">
                    {isExternal(item.href) ? (
                      <a
                        href={item.href}
                        className="nav-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.href} className="nav-link">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <span className="cta-mobile-wrap">
              <a
                ref={btnRef}
                className="cta-mobile cta-image-mobile no-hover"
                href="#menu"
                aria-label="Open menu"
                aria-controls="mobile-drawer"
                aria-expanded={open ? "true" : "false"}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(true);
                }}
              >
                <span className="visually-hidden">Open menu</span>
              </a>
            </span>
            <span className="cta-desktop-wrap">
              <a
                className="cta cta-image no-hover"
                href={ctaHref}
                aria-label={ctaLabel}
              >
                <span className="visually-hidden">{ctaLabel}</span>
              </a>
            </span>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="drawer-backdrop"
          onClick={closeOnBackdrop}
          aria-hidden={false}
        >
          <aside
            id="mobile-drawer"
            className="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            ref={drawerRef}
          >
            <div className="drawer-header">
              <Link className="brand" to="/" aria-label="Homepage">
                <img
                  className="brand-logo"
                  src="/header/logo.png"
                  alt="Brand"
                />
              </Link>
              <button
                className="drawer-close"
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  btnRef.current?.focus();
                }}
                ref={firstFocusableRef as any}
                type="button"
              >
                ✕
              </button>
            </div>
            <nav className="drawer-nav" aria-label="Mobile primary">
              <ul className="drawer-list">
                {navItems.map((item, idx) => (
                  <li key={item.href} className="drawer-li">
                    {isExternal(item.href) ? (
                      <a
                        href={item.href}
                        className="drawer-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="drawer-link"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="drawer-cta-wrap">
                <a
                  className="cta cta-image no-hover drawer-cta"
                  href={ctaHref}
                  aria-label={ctaLabel}
                  onClick={() => setOpen(false)}
                  ref={lastFocusableRef as any}
                >
                  <span className="visually-hidden">{ctaLabel}</span>
                </a>
              </div>
            </nav>
          </aside>
        </div>
      )}
      <style>{`
        .header-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2147483647;
          pointer-events: none;
        }
        .header-outer {
          display: flex;
          justify-content: center;
          padding-top: 58px;
          padding-bottom: 12px;
          pointer-events: none;
        }
        .header-inner {
          width: 82%;
          max-width: 1400px;
          min-width: 320px;
          height: 72px;
          background: #040D33CC;
          border-radius: 999px;
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          padding: 0 16px 0 16px;
          gap: 12px;
          box-shadow:
            0 2px 6px rgba(0,0,0,0.25),
            inset 0 0 0 1px rgba(255,255,255,0.035);
          backdrop-filter: saturate(120%) blur(6px);
          -webkit-backdrop-filter: saturate(120%) blur(6px);
          pointer-events: auto;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }
        .brand-logo {
          height: 34px;
          width: auto;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
        }
        .end-group {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 28px;
          min-width: 0;
        }
        .nav { overflow: hidden; }
        .nav-list {
          display: flex;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: nowrap;
        }
        .nav-li { display: inline-flex; }
        .nav-link {
          color: #EDEFF8;
          text-decoration: none;
          font-size: 16px;
          line-height: 1;
          opacity: 0.95;
          white-space: nowrap;
        }

        .nav-link:hover,
        .nav-link:focus-visible {
          color: #EDEFF8;
          opacity: 0.95;
          text-decoration: none;
        }
        .cta-mobile-wrap { display: none; }
        .cta-desktop-wrap { display: inline-block; }
        .cta {
          position: relative;
          display: inline-block;
          height: 52px;
          width: 190px;
          border-radius: 999px;
          overflow: hidden;
          flex: 0 0 auto;
          text-decoration: none;
          isolation: isolate;
          background: transparent;
        }
        .cta-image {
          background-image: url("/header/button.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
        }
        .cta-mobile {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 5px;
          height: 45px;
          width: 45px;
          border-radius: 999px;
          overflow: hidden;
          flex: 0 0 auto;
          text-decoration: none;
          background: transparent;
        }
        .cta-image-mobile {
          background-image: url("/header/menu.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
        }
        .cta::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          --btn-h: 52px;
          width: var(--btn-h);
          height: var(--btn-h);
          transform: translate(-50%, -50%) scale(0.05);
          transform-origin: center center;
          border-radius: 999px;
          border: 2px solid #A8CEFF;
          box-sizing: border-box;
          pointer-events: none;
          opacity: 0;
          animation: ring-fill 1.8s ease-out infinite;
        }
        .cta { --btn-h: 52px; }
        @keyframes ring-fill {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.05); }
          10%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(4.8); opacity: 0; }
        }
        .no-hover:hover,
        .no-hover:focus-visible {
          opacity: inherit;
          transform: none;
          box-shadow: none;
          outline: none;
        }
        .visually-hidden {
          position: absolute !important;
          width: 1px; height: 1px;
          padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0 0 0 0);
          white-space: nowrap; border: 0;
        }
        :root { --header-offset: 122px; }
        body { scroll-padding-top: var(--header-offset); }

        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          z-index: 2147483648;
          display: flex;
          justify-content: flex-end;
          pointer-events: auto;
        }
        .drawer {
          width: min(88vw, 360px);
          max-width: 90%;
          height: 100vh;
          background: #040D33F2;
          border-left: 1px solid rgba(255,255,255,0.06);
          box-shadow: -6px 0 18px rgba(0,0,0,0.35);
          transform: translateX(0);
          animation: drawer-in 240ms cubic-bezier(0.2,0.8,0.2,1) forwards;
          display: grid;
          grid-template-rows: auto 1fr auto;
          gap: 16px;
          padding: 16px 16px 20px 16px;
          outline: none;
          pointer-events: auto;
        }
        @keyframes drawer-in {
          from { transform: translateX(24px); opacity: 0.6; }
          to   { transform: translateX(0); opacity: 1; }
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .drawer-close {
          height: 36px;
          width: 36px;
          border-radius: 999px>
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: #EDEFF8;
          cursor: pointer;
        }
        .drawer-close:hover,
        .drawer-close:focus-visible {
          outline: none;
          border-color: rgba(255,255,255,0.22);
        }
        .drawer-nav { overflow: auto; }
        .drawer-list {
          list-style: none;
          margin: 0;
          padding: 10px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .drawer-li { display: block; }
        .drawer-link {
          display: block;
          color: #EDEFF8;
          text-decoration: none;
          font-size: 18px;
          line-height: 1;
          opacity: 0.95;
          padding: 12px 10px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.035);
        }
        .drawer-link:hover,
        .drawer-link:focus-visible {
          color: #EDEFF8;
          opacity: 0.95;
          text-decoration: none;
          background: rgba(255,255,255,0.03);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.035);
          outline: none;
        }
        .drawer-cta-wrap {
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: center;
        }
        .drawer-cta {
          width: 100%;
          max-width: 280px;
          height: 48px;
        }
        @media (max-width: 1280px) {
          .header-inner { width: 78%; }
          .nav-list { gap: 24px; }
          .cta { width: 210px; height: 50px; }
        }
        @media (max-width: 1100px) {
          .header-inner { width: 82%; }
          .nav-link { font-size: 15px; }
          .cta { width: 200px; height: 48px; }
        }
        @media (max-width: 992px) {
          .header-inner { width: 88%; height: 66px; }
          .nav-list { gap: 18px; }
          .nav-link { font-size: 14px; }
          .cta { width: 184px; height: 46px; }
          .brand-logo { height: 32px; }
        }
        @media (max-width: 768px) {
          .header-inner {
            width: 92%;
            grid-template-columns: auto 1fr;
            padding: 0 12px;
            height: 62px;
          }
          .nav { display: none; }
          .cta-desktop-wrap { display: none; }
          .cta-mobile-wrap { display: inline-block; }
          .cta { width: 168px; height: 44px; }
        }
        @media (max-width: 1280px) { .cta { --btn-h: 50px; } }
        @media (max-width: 1100px) { .cta { --btn-h: 48px; } }
        @media (max-width: 992px)  { .cta { --btn-h: 46px; } }
        @media (max-width: 768px)  { .cta { --btn-h: 44px; } }
      `}</style>
    </header>
  );
};
export default Header;
