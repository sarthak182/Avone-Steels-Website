function Trashy() {
  return (
    <div>
      <section className="about">
        <h2>About Us</h2>
        <p>Avone Steels India is a family-run manufacturer with over three decades of expertise in bright bar and forging technology.
          We combine legacy craftsmanship with modern machinery to supply precision steel bars trusted by machinists, stockists, and OEMs worldwide.</p>
        <ul>
          <li>🧱 Direct Manufacturer – No traders in between</li>
          <li>🧪 Lab-Tested Material (ISO-Certified Labs)</li>
          <li>🚢 CIF & FOB Export Support</li>
          <li>⏱ On-Time Delivery & Custom Sizes</li>
        </ul>
      </section>
      <section id="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>EN8D Bright Bars</h3>
            <p>Medium carbon, high tensile strength, machining grade. Sizes: 12mm – 80mm</p>
          </div>
          <div className="product-card">
            <h3>EN19 Bright Bars</h3>
            <p>Alloy steel for automotive and aerospace applications.</p>
          </div>
          <div className="product-card">
            <h3>SS 304 / 316 Bright Bars</h3>
            <p>Corrosion-resistant, mirror finish bright bars for global industries.</p>
          </div>
          <div className="product-card">
            <h3>Hex & Square Bars</h3>
            <p>For fasteners, precision components, and fabrication work.</p>
          </div>
        </div>
      </section>

      <section className="exports">
        <h2>Global Exports</h2>
        <p>Avone Steels India supplies traders, stockists, and component manufacturers globally.
          We handle documentation, CIF logistics, and port delivery seamlessly. Countries served include the UK, UAE, Australia, and Europe.</p>
        <p><strong>Certifications:</strong> IEC | DGFT | MSME | GST Registered | ISO Testing Partner</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Company Name" />
            <textarea rows="4" placeholder="Your Requirements (Grade / Quantity)" />
            <button type="submit">Send Enquiry</button>
          </form>
        </div>
        <p><strong>Address:</strong> Plot No 19A, Sector XX, Faridabad - 121004, Haryana, India</p>
        <p><strong>Email:</strong> contact@avonesteels.com | <strong>Phone:</strong> +91-9811159460</p>
      </section>

      <footer>© 2025 Avone Steels India | Made in India 🇮🇳 | Designed for Global Export</footer>
    </div>
  );
}

export default Trashy;
