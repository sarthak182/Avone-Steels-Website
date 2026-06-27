import Icon from "./icons";

const industries = [
  {
    icon: "axle",
    title: "Shaft & Axle Manufacturing",
    grades: "EN8D · EN19 · MS",
    text: "Drive, transmission, axle and stepped shafts. Our straightness and uniformity give smooth CNC machining, accurate turning and minimal tool wear.",
  },
  {
    icon: "car",
    title: "Automotive Components",
    grades: "EN8D · 20MnCr5 · SAE 8620",
    text: "Pins, studs, bushings, spacers, brackets and linkages — grades chosen for strength, wear resistance and case hardening.",
  },
  {
    icon: "cylinder",
    title: "Hydraulic & Pneumatic Equipment",
    grades: "",
    text: "Cylinder rods, piston rods, valve bodies, couplings and connectors, where controlled surface finish and straightness drive reliable sealing and dimensional stability.",
  },
  {
    icon: "gear",
    title: "Gear & Transmission Components",
    grades: "20MnCr5 · EN19 · SAE 8620",
    text: "Gears, gear blanks, splines and hubs — grades that machine well and respond cleanly to heat treatment and case hardening.",
  },
  {
    icon: "cpu",
    title: "CNC Machining Units",
    grades: "EN1A (S) · EN1A (Pb)",
    text: "Free-cutting grades for job shops and automatic lathes — superior machinability, smooth finish and high productivity on mass-produced parts.",
  },
  {
    icon: "wrench",
    title: "General Engineering & Fabrication",
    grades: "MS · EN8D",
    text: "Fixtures, fasteners, frames, supports and brackets that need consistent dimensions and a clean surface finish.",
  },
  {
    icon: "factory",
    title: "Industrial Equipment & Machinery",
    grades: "",
    text: "Components for industrial machinery, material-handling systems, agricultural equipment and workshop machinery built for reliability and repeatability.",
  },
  {
    icon: "bolt",
    title: "Electrical & Mechanical Assemblies",
    grades: "",
    text: "Spacers, sleeves, studs and connectors for structural use in electrical panels, motors and mechanical assemblies.",
  },
  {
    icon: "box",
    title: "Traders & Stockists",
    grades: "",
    text: "A wide size range, mixed grades and consistent quality for onward supply to machining, fabrication and OEM customers.",
  },
];

function IndustriesServed() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Industries Served</span>
          <h2 className="section-title">Trusted where precision is critical</h2>
          <p className="section-sub">
            Our precision bright bars are used across engineering and industrial sectors where
            dimensional accuracy, machinability and consistency are non-negotiable. We regularly
            supply the following industries.
          </p>
        </div>

        <div className="ind__grid">
          {industries.map((ind) => (
            <article className="ind-card" key={ind.title}>
              <div className="icon-badge"><Icon name={ind.icon} /></div>
              <h3>{ind.title}</h3>
              <p>{ind.text}</p>
              {ind.grades && <span className="ind-card__grades">{ind.grades}</span>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesServed;
