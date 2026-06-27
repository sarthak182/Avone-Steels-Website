import Icon from "./icons";

function ExportsSection() {
  const countries = ["United Kingdom", "UAE", "Australia", "Europe"];
  const certs = ["IEC", "DGFT", "MSME", "GST Registered", "ISO Testing Partner"];

  return (
    <section className="section" id="exports">
      <div className="container">
        <div className="exports-panel">
          <div className="exports-panel__copy">
            <span className="eyebrow">Global Exports</span>
            <h2 className="section-title">Bright bars, shipped worldwide</h2>
            <p>
              Avone Steels India supplies traders, stockists and component manufacturers
              across the globe. We handle documentation, CIF logistics and port delivery
              seamlessly, so your material arrives ready to use.
            </p>
            <div className="export-block">
              <div className="export-block__label">Countries served</div>
              <div className="tag-row">
                {countries.map((c) => (
                  <span className="tag" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="exports-panel__side">
            <div className="icon-badge" style={{ background: "rgba(224,160,46,0.16)", color: "#f3cd86" }}>
              <Icon name="globe" />
            </div>
            <div className="export-block">
              <div className="export-block__label">Certifications & registrations</div>
              <div className="tag-row">
                {certs.map((c) => (
                  <span className="tag tag--amber" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExportsSection;
