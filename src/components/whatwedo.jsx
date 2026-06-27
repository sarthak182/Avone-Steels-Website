import WoodenSlab from "../images/wooden-slab2.jpg";
import Shotblasting from "../images/shotblasting.jpg";
import Pointing from "../images/pointing.jpg";
import DrawBench from "../images/drawbench.jpg";
import Straightening from "../images/straightening.jpg";
import CuttingLength from "../images/cutting.jpg";
import { ZoomImage } from "./lightbox";

const steps = [
  {
    n: 1,
    title: "Raw Material Inspection & Sorting",
    img: WoodenSlab,
    alt: "Steel stored on elevated wooden slabs",
    text: "We receive hot rolled bars and coils from trusted mills. Every lot is checked before it moves forward.",
    chips: ["Heat numbers & chemistry", "Surface defects", "Diameter variation", "Hardness & mechanicals", "Straightness"],
    note: { label: "Moisture prevention:", text: "all material is stored on elevated wooden slabs — never on the floor — keeping it dry, rust-free and surface-clean even in humid conditions." },
  },
  {
    n: 2,
    title: "Shot Blasting",
    img: Shotblasting,
    alt: "Shot blasting machine cleaning bars",
    text: "Bars pass through our shot blasting machine to strip away surface contamination.",
    chips: ["Rust", "Mill scale", "Oil", "Surface impurities"],
    note: { label: "Why it matters:", text: "a clean, uniform surface means smoother drawing, longer die life and better final brightness." },
  },
  {
    n: 3,
    title: "Pointing",
    img: Pointing,
    alt: "Pointer machine reducing the bar end",
    text: "The leading end of each bar is reduced on a pointer machine so it can enter the drawing die smoothly.",
    chips: ["Smooth die entry", "Lower draw-bench load", "No bar breakage"],
    note: { label: "Note:", text: "the pointed section is later cropped and sold as scrap." },
  },
  {
    n: 4,
    title: "Cold Drawing",
    img: DrawBench,
    alt: "Cold drawing bench pulling bars through dies",
    text: "Bars are pulled through precision steel dies to reach exact size — the step that gives a bright bar its signature finish.",
    chips: ["Tight tolerances", "Straightness", "Better mechanicals", "Fine surface finish", "Higher tensile strength"],
    note: null,
  },
  {
    n: 5,
    title: "Straightening",
    img: Straightening,
    alt: "Roller straightening machine",
    text: "Drawn bars can hold slight bends from internal stresses. Roller straightening machines bring them to true, linear form.",
    chips: ["Better machinability", "Zero wobble for shafts", "CNC-friendly straightness"],
    note: null,
  },
  {
    n: 6,
    title: "Cutting to Length",
    img: CuttingLength,
    alt: "Cutting bars to specified lengths",
    text: "Bars are cut to customer-specified lengths on hydraulic and semi-automatic cutting machines.",
    chips: ["3 m & 6 m standard", "Custom lengths", "Short bars for machining", "Tight-tolerance cuts"],
    note: null,
  },
];

function WhatWeDo() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">From hot rolled bar to precision bright bar</h2>
          <p className="section-sub">
            At Aditya Steels we manufacture high-precision bright bars across multiple grades
            and profiles. Modern infrastructure and a six-stage process deliver material that
            meets the exacting standards of engineering and manufacturing companies in India
            and overseas.
          </p>
        </div>

        <div className="process__grid">
          {steps.map((s) => (
            <article className="step-card" key={s.n}>
              <div className="step-card__media">
                <span className="step-card__num">{s.n}</span>
                <ZoomImage src={s.img} alt={s.alt} />
              </div>
              <div className="step-card__body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="chips">
                  {s.chips.map((c) => (
                    <li className="chip" key={c}>{c}</li>
                  ))}
                </ul>
                {s.note && (
                  <p className="note">
                    <strong>{s.note.label}</strong> {s.note.text}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
