const grades = [
  {
    badge: "MS",
    name: "Mild Steel (Low Carbon)",
    aka: "MS Bright Bar · Low Carbon Steel · IS 2062 · SAE 1008/1010",
    desc: "Very low carbon (0.05–0.25%) — soft, ductile and easy to cold work. Highly machinable and weldable, ideal for general engineering where high strength isn't critical.",
    apps: ["Fabrication & general engineering", "Shafts, pins, bushes", "Light-duty machine components"],
  },
  {
    badge: "EN8D",
    name: "Medium Carbon Steel",
    aka: "EN8 · C45 · 1045 · 080M40 · 45C8",
    desc: "Medium carbon (~0.45%) with higher strength, toughness and good machinability — often supplied bright drawn or turned for precision components.",
    apps: ["Automotive shafts, axles, studs, gears", "Machine tools & bolts", "Connecting rods, spindles", "Heavy-duty mechanical parts"],
  },
  {
    badge: "20MnCr5",
    name: "Case-Hardening Alloy Steel",
    aka: "20MnCr5H · 1.7147 · SCM420 · AISI 5120",
    desc: "A carburizing steel high in Mn and Cr. Develops a hard, wear-resistant case while keeping a tough, impact-resistant core — perfect where surface hardness matters.",
    apps: ["Gears, pinions, shafts", "Clutch & transmission parts", "Case-hardened automotive components", "Bearings & bushings"],
  },
  {
    badge: "EN19",
    name: "High-Strength Alloy Steel",
    aka: "4140 · 42CrMo4 · SCM440 · 708M40",
    desc: "A chromium-molybdenum alloy with exceptional tensile and fatigue strength and shock resistance — built for high-stress engineering applications.",
    apps: ["Heavy-duty shafts, gears, axles", "Crankshafts, connecting rods", "High-stress machine parts", "Oil & gas equipment", "Automotive performance parts"],
  },
  {
    badge: "SAE 8620",
    name: "Case-Hardening Alloy Steel",
    aka: "21NiCrMo2 · 1.6523 · 20NiCrMo2-2 · 20CrNiMo",
    desc: "A low-carbon Ni-Cr-Mo alloy for carburizing. Forms a hard outer case over a tough, ductile core — ideal for shock-loaded components.",
    apps: ["Gears, spline shafts, pinions", "Transmission parts", "Oil & gas machinery components", "Wear-resistant mechanical parts"],
  },
  {
    badge: "EN1A (S)",
    name: "Sulphurised Free-Cutting Steel",
    aka: "230M07 · 11SMn30 · Free Cutting Steel",
    desc: "Sulphur (~0.1–0.3%) lifts machinability for high-speed turning, threading and drilling, leaving a very smooth surface finish.",
    apps: ["Precision machined components", "Nuts, bolts, screws", "Fine-finish turned parts", "Electrical fittings, cycle/motor parts"],
  },
  {
    badge: "EN1A (Pb)",
    name: "Leaded Free-Cutting Steel",
    aka: "EN1A Leaded · 11SMnPb30 · 230M07Pb",
    desc: "EN1A with added lead (0.15–0.35%) for excellent machinability, minimal tool wear and mirror-finish surfaces — a favourite for high-productivity CNC turning.",
    apps: ["Automatic lathe / CNC components", "High-precision turned parts", "Fasteners, connectors", "Bushes, pins, tight-tolerance fittings"],
  },
];

const sizes = [
  ["Rounds", "7.80 – 46.35 mm"],
  ["Squares", "7.82 – 25.40 mm"],
  ["Hexagons", "18.88 – 35.85 mm"],
];

function ProductSection() {
  return (
    <section className="section section--alt" id="products">
      <div className="container">
        <div className="products__head">
          <div className="section-head">
            <span className="eyebrow">Our Products</span>
            <h2 className="section-title">Seven precision grades, one standard of quality</h2>
            <p className="section-sub">
              MS and EN-series bright bars in round, square and hex profiles — each backed by
              Mill Test Certificates and full heat-number traceability.
            </p>
          </div>
          <a className="btn btn--outline" href="/productslist.pdf" target="_blank" rel="noopener noreferrer">
            View Full Product List (PDF)
          </a>
        </div>

        <div className="products__grid">
          {grades.map((g) => (
            <article className="grade-card" key={g.badge}>
              <div className="grade-card__head">
                <span className="grade-badge">{g.badge}</span>
                <h3>{g.name}</h3>
              </div>
              <p className="grade-aka">{g.aka}</p>
              <p>{g.desc}</p>
              <p className="grade-label">Applications</p>
              <ul className="grade-apps">
                {g.apps.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="spec-strip">
          {sizes.map(([label, range]) => (
            <div className="spec-card" key={label}>
              <div className="spec-card__label">{label}</div>
              <div className="spec-card__range">{range}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
