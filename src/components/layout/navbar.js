"use client";
import { useState } from "react";

import Style from "./navbar.module.css";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close mobile menu on nav link click (optional)
    const handleNavClick = () => setMobileOpen(false);

    return (
        <nav className={Style.navbar}>
            <div className={Style.logo}>
                <img src="/Nidads-2.webp" alt="Nidads Logo" style={{ height: '40px', width: 'auto' }} />
            </div>
            {/* Hamburger button (only shows when menu is closed on mobile) */}
            <button
                className={Style.mobileToggle}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="navbar-menu"
                onClick={() => setMobileOpen((v) => !v)}
                style={{ display: mobileOpen ? 'none' : undefined }}
            >
                <span>☰</span>
            </button>
            <div
                id="navbar-menu"
                className={
                  Style.linksContainer + (mobileOpen ? ' ' + Style.open : '')
                }
            >
                {/* Close button inside mobile menu */}
                <button
                  className={Style.mobileClose}
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  ✕
                </button>
                <ul>
                    <li><a href="#courses" onClick={handleNavClick}>Courses</a></li>
                    <li><a href="#domain" onClick={handleNavClick}>Domain</a></li>
                    <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
                    <li><a href="#about" onClick={handleNavClick}>About</a></li>
                    <li className={Style.mobileOnly}><a href="#councelling" onClick={handleNavClick}>Councelling</a></li>
                </ul>
            </div>
            <a href="#councelling" className={Style.desktopOnly} onClick={handleNavClick} style={{ color: '#fff', marginLeft: '1rem', textDecoration: 'none' }}>Councelling</a>
        </nav>
    );
}