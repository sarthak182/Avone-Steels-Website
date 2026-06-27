import Icon from "./icons";

function OurVision() {
  const pillars = [
    {
      icon: "check",
      title: "International Standards",
      text: "Material that meets international dimensional standards, with complete traceability through heat numbers and MTCs — reliable in machining, shaft manufacturing, hydraulics and general engineering.",
    },
    {
      icon: "globe",
      title: "Simple, Transparent Exports",
      text: "An export process built on competitive pricing, fast communication, safe packing and documentation customers can depend on, shipment after shipment.",
    },
    {
      icon: "chat",
      title: "Long-Term Partnerships",
      text: "We earn repeat business by delivering consistent quality, honouring lead times and responding quickly to every customer need.",
    },
    {
      icon: "award",
      title: "A Global Footprint",
      text: "Our goal is to expand India's bright bar footprint worldwide and make Avone the preferred supplier for dependable quality, professionalism and long-term commitment.",
    },
  ];

  return (
    <section className="section section--alt" id="vision">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Mission &amp; Vision</span>
          <h2 className="section-title">Dependable bright bars, every single shipment</h2>
          <p className="section-sub">
            We pair three decades of family experience with modern manufacturing to supply
            precision-drawn MS and alloy steel bright bars to traders, machinists and
            engineering industries across the globe.
          </p>
        </div>

        <div className="vision__grid">
          {pillars.map((p) => (
            <div className="vision-card" key={p.title}>
              <div className="icon-badge"><Icon name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurVision;
