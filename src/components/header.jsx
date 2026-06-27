import heroBg from "../images/crane.jpg";

function HeaderComponent() {
  const stats = [
    ["1994", "Heritage since"],
    ["300+", "Tonnes / month"],
    ["7", "Precision grades"],
    ["100%", "MTC + heat traceable"],
  ];

  return (
    <header
      className="hero"
      id="top"
      style={{
        backgroundImage:
          `linear-gradient(150deg, rgba(7,17,31,0.94) 0%, rgba(15,32,54,0.82) 55%, rgba(31,78,121,0.72) 100%), url(${heroBg})`,
      }}
    >
      <div className="container hero__inner">
        <span className="hero__eyebrow">Avone Steels India · Aditya Steels</span>
        <h1>Precision Bright Bars,<br />Engineered for the World</h1>
        <p className="hero__lead">
          We manufacture MS and EN-series bright bars — cold-drawn, straightened and
          finished to tight tolerances. From a 1994 trading legacy to 300+ tonnes of
          precision steel every month, traders and OEMs worldwide rely on Avone.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#products">Explore Our Grades</a>
          <a className="btn btn--ghost" href="#contact">Request a Quote</a>
        </div>

        <div className="hero__stats">
          {stats.map(([num, label]) => (
            <div className="hero-stat" key={label}>
              <span className="hero-stat__num">{num}</span>
              <span className="hero-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
