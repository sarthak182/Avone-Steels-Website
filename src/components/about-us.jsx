function AboutUs() {
  const milestones = [
    ["1994", "Arvind Enterprises founded by Mr. Arvind Tiwari and Mr. Ghanshyam Tiwari as a regional steel trading firm."],
    ["2004", "Relaunched as Avone Steels India, expanding capabilities and reputation in the Indian steel market."],
    ["2014", "Aditya Steels established as the group's dedicated manufacturing unit."],
  ];

  const facts = [
    ["300+", "Tonnes produced / month"],
    ["7", "Precision steel grades"],
    ["30+", "Years of expertise"],
    ["100%", "MTC + heat traceable"],
  ];

  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div className="about__body">
          <div className="section-head">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">Three decades of steel, built on trust</h2>
          </div>
          <p>
            Avone Steels carries a legacy that began in 1994, when Mr. Arvind Tiwari and
            Mr. Ghanshyam Tiwari founded Arvind Enterprises. Built on integrity,
            consistency and deep market expertise, the firm grew from a local steel trader
            into a supplier trusted across the region.
          </p>
          <p>
            In 2004 the company reintroduced itself as <strong>Avone Steels India</strong>,
            broadening its capabilities and earning a strong reputation in the Indian steel
            market. To anchor our manufacturing, <strong>Aditya Steels</strong> was
            established in 2014 as our dedicated production unit. Today the two operate as a
            single, integrated group delivering high-quality MS and EN-series bright bars to
            customers at home and abroad.
          </p>
          <p>
            With over three decades of combined technical and market expertise, we
            specialise in accurate, clean and reliable bright bars across round, square and
            hex profiles. Every bar moves through shot blasting, pointing, cold drawing,
            straightening and cutting — for tight tolerances, a smooth finish and consistent
            performance, shipment after shipment. We supply automotive, machining,
            fabrication, agricultural equipment, hydraulics and general engineering customers
            alike.
          </p>
        </div>

        <aside className="about__aside">
          <div className="milestone-card">
            <h3 className="milestone-card__title">Our journey</h3>
            {milestones.map(([year, text]) => (
              <div className="milestone" key={year}>
                <span className="milestone__year">{year}</span>
                <span className="milestone__text">{text}</span>
              </div>
            ))}
          </div>
          <div className="facts">
            {facts.map(([num, label]) => (
              <div className="fact" key={label}>
                <span className="fact__num">{num}</span>
                <span className="fact__label">{label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default AboutUs;
