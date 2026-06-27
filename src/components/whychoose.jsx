import Icon from "./icons";
import { ZoomImage } from "./lightbox";
import whychooseusimage from "../images/whychooseus.jpg";
import mtccertificate from "../images/mtc_page-0001.jpg";

const reasons = [
  {
    icon: "award",
    title: "30+ Years of Family Legacy",
    text: "Three decades in steel trading and manufacturing give us deep insight into sourcing, pricing and customer needs — so we stay quality-stable and price-stable even in volatile markets.",
    list: [],
  },
  {
    icon: "shield",
    title: "Strict QC, MTC & Heat Numbers",
    text: "Every bundle is clearly marked, and every order ships with a Mill Test Certificate for full traceability. Each bundle carries:",
    list: ["Party name", "Grade", "Size", "Length", "Remarks"],
  },
  {
    icon: "beaker",
    title: "Third-Party ISO-Lab Testing",
    text: "Although we don't currently hold ISO certification ourselves, all material can be independently verified through ISO-accredited third-party labs. We support:",
    list: ["CIF", "FOB", "EXW"],
  },
  {
    icon: "chat",
    title: "Fast, Professional Communication",
    text: "Professional email, quick replies, clear quotations and structured PDFs. With us, buyers get:",
    list: ["Immediate response", "Clear pricing", "Packing & process photos", "Certificates", "Heat-number traceability"],
  },
  {
    icon: "box",
    title: "Reliable, Export-Ready Packing",
    text: "Bundles are shot-blasted, numbered, labelled and strapped with high-strength steel straps, packed export-safe — so buyers receive clean, dry, rust-free bars.",
    list: [],
  },
];

function WhyChoose() {
  return (
    <section className="section section--dark" id="why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="section-title">Quality you can document, service you can rely on</h2>
          <p className="section-sub">
            Across Avone Steels (parent company, est. 2004) and Aditya Steels (manufacturing
            unit, est. 2014), our commitment is simple — consistent quality, reliable service
            and long-term value. Here is why traders, fabricators and machining companies
            trust us.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map((r) => (
            <article className="why-card" key={r.title}>
              <div className="icon-badge"><Icon name={r.icon} /></div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              {r.list.length > 0 && (
                <ul className="tick-list">
                  {r.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <div className="why__gallery">
          <figure>
            <ZoomImage src={whychooseusimage} alt="Marked and labelled export steel bundle" />
            <figcaption>Every bundle marked with party, grade, size and length.</figcaption>
          </figure>
          <figure>
            <ZoomImage src={mtccertificate} alt="Sample Mill Test Certificate" />
            <figcaption>A Mill Test Certificate is issued with every order.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
