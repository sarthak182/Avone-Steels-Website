import Icon from "./icons";

function ContactUs() {
  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-title">Let's talk about your requirement</h2>
          <p className="section-sub">
            Share your grade, size and quantity — we'll respond quickly with pricing,
            documentation and lead times.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact-card">
            <div className="contact-item">
              <div className="icon-badge"><Icon name="pin" /></div>
              <div>
                <div className="contact-item__label">Address</div>
                <p className="contact-item__value">
                  Plot No 19A, New Industrial Township, Faridabad - 121004, Haryana, India
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-badge"><Icon name="mail" /></div>
              <div>
                <div className="contact-item__label">Email</div>
                <a className="contact-item__value" href="mailto:contact@avonesteels.com">
                  contact@avonesteels.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-badge"><Icon name="phone" /></div>
              <div>
                <div className="contact-item__label">Phone</div>
                <a className="contact-item__value" href="tel:+919811159460">
                  +91-9811159460
                </a>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Request a quote</h3>
            <p>
              Direct from the manufacturer — no traders in between. Reach out for grade
              availability, custom sizes and export pricing.
            </p>
            <div className="contact-cta__actions">
              <a className="btn btn--primary" href="mailto:contact@avonesteels.com?subject=Enquiry%20-%20Bright%20Bars">
                Email an Enquiry
              </a>
              <a className="btn btn--ghost" href="tel:+919811159460">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
