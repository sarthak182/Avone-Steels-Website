function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand footer__col">
            <span className="brand-name">Avone Steels India</span>
            <p>
              Manufacturer and exporter of precision MS &amp; EN-series bright bars,
              produced at our Aditya Steels unit with full MTC and heat-number
              traceability.
            </p>
            <div className="cert-chips">
              {["IEC", "DGFT", "MSME", "GST Registered", "ISO Testing Partner"].map((c) => (
                <span className="cert-chip" key={c}>{c}</span>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <a href="#about">About Us</a>
            <a href="#process">Our Process</a>
            <a href="#products">Products</a>
            <a href="#industries">Industries</a>
            <a href="#why">Why Choose Us</a>
          </div>

          <div className="footer__col">
            <h4>Products</h4>
            <a href="#products">Mild Steel (MS)</a>
            <a href="#products">EN8D · EN19</a>
            <a href="#products">20MnCr5 · SAE 8620</a>
            <a href="#products">EN1A (S) · EN1A (Pb)</a>
            <a href="/productslist.pdf" target="_blank" rel="noopener noreferrer">Product List (PDF)</a>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <p>Plot No 19A, New Industrial Township, Faridabad&nbsp;-&nbsp;121004, Haryana, India</p>
            <a href="mailto:contact@avonesteels.com">contact@avonesteels.com</a>
            <a href="tel:+919811159460">+91-9811159460</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Avone Steels India · Aditya Steels. All rights reserved.</span>
          <span>Precision Bright Bars for the World</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
