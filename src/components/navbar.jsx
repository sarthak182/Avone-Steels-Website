import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    ["#about", "About"],
    ["#process", "Process"],
    ["#products", "Products"],
    ["#industries", "Industries"],
    ["#why", "Why Us"],
    ["#contact", "Contact"],
  ];

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={close}>
          <img
            className="nav__logo"
            src={`${process.env.PUBLIC_URL}/avonesteels-logo.png`}
            alt="Avone Steels India logo"
          />
          <span>
            <span className="brand-name">Avone Steels</span>
            <span className="brand-tag">Precision Bright Bars</span>
          </span>
        </a>

        <ul className={`nav__links ${open ? "open" : ""}`}>
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="nav__cta">
          <a className="btn btn--solid btn--sm nav__quote" href="#contact">Get a Quote</a>
          <button
            className="nav__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
