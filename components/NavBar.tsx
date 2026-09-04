"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/#industries", label: "Industries" },
  { href: "/#process", label: "How We Work" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="nav">
      <div className="container">
        <Link className="brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/av-corp-logo.png" alt="AV Corp logo" />
          <div>
            A V CORP
            <small>Textiles engineered for business</small>
          </div>
        </Link>

        <button
          className="mobile-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
        </button>

        <div className={open ? "menu open" : "menu"}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link className="btn btn-primary" href="/contact">
          Request a Quote
        </Link>
      </div>
    </nav>
  );
}
