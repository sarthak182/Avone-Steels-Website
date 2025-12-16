import "../styles/products.css"
function ProductSection(){
    return(
        <>
        <h2>Our Products - <a href="/productslist.pdf" target="_blank" rel="noopener noreferrer">
    <button type="button">View PDF</button>
  </a>
  </h2>
        <div className="products-cont">
        <div>
            <p style={{ fontWeight: 'bold' }}>
  1. MS (Mild Steel / Low Carbon Steel)
            </p>
    Other Names: MS Bright Bar, Low Carbon Steel, IS 2062 (commercial grade), SAE 1008/1010 (near equivalents)

    <br/>Description:
    Mild Steel contains very low carbon (0.05-0.25%), making it soft, ductile, and easy to cold work. It is highly machinable and weldable and is used for general engineering, fabrication, and machining work where high strength is not critical.

    <br/>
    Applications:
    <ul>
        <li>
        Fabrication and general engineering
        </li>
        <li>
        Shafts, pins, bushes
        </li>
        <li>
        Light-duty machine components
        </li>
        </ul></div>

        <div>
            <p style={{ fontWeight: 'bold' }}>
  2. EN8D (Medium Carbon Steel)
            </p>
    Other Names: EN8, C45, 1045, 080M40 (British), 45C8 (Indian)

    <br/>Description:
EN8D is a medium carbon steel (~0.45% carbon) known for higher strength, toughness, and good machinability. EN8D is often supplied in bright drawn or turned form for precision components.

    <br/>
    Applications:
    <ul>
        <li>
        Automotive shafts, axles, studs, gears
        </li>
        <li>
        Machine tools and bolts
        </li>
        <li>
        Connecting rods, spindles
        </li>
        <li>
        Heavy-duty mechanical parts
        </li>
        </ul></div>
        <div>
            <p style={{ fontWeight: 'bold' }}>
  3. 20MnCr5 (Case Hardening Alloy Steel)
            </p>
    Other Names: 20MnCr5H, 1.7147, SCM420 (close Japanese equivalent), AISI 5120 (near)

    <br/>Description:
20MnCr5 is a carburizing steel with high Mn and Cr content. It has a hard, wear-resistant case after carburizing while keeping a tough, impact-resistant core. Excellent for parts that need surface hardness.

    <br/>
    Applications:
    <ul>
        <li>
        Gears, pinions, shafts
        </li>
        <li>
        Clutch parts, transmission components
        </li>
        <li>
        Automotive components needing case hardening
        </li>
        <li>
        Bearings and bushings
        </li>
        </ul></div>

        <div>
            <p style={{ fontWeight: 'bold' }}>
  4. EN19 (High Strength Alloy Steel)
            </p>
Other Names: 4140, 42CrMo4, SCM440, 708M40

    <br/>Description:
EN19 is a chromium-molybdenum alloy steel offering exceptional tensile strength, fatigue strength, and shock resistance. Ideal for high-stress engineering applications.

    <br/>
    Applications:
    <ul>
        <li>
        Heavy-duty shafts, gears, axles
        </li>
        <li>
        Crankshafts, connecting rods
        </li>
        <li>
        High-stress machine parts
        </li>
        <li>
        Oil & gas equipment components
        </li>
        <li>
        Automotive performance parts
        </li>
        </ul></div>

        <div>
            <p style={{ fontWeight: 'bold' }}>
5. SAE 8620 (Case Hardening Alloy Steel)
            </p>
Other Names: 21NiCrMo2, 1.6523, 20NiCrMo2-2, 20CrNiMo

    <br/>Description:
SAE 8620 is a low-carbon alloy steel with Ni-Cr-Mo, used for carburizing. It develops a hard outer case with a tough and ductile core, making it perfect for shock-loaded components.

    <br/>
    Applications:
    <ul>
        <li>
        Gears, spline shafts, pinions
        </li>
        <li>
        Transmission parts
        </li>
        <li>
        Oil & gas machinery components
        </li>
        <li>
        Wear-resistant mechanical parts
        </li>
        </ul></div>

        <div>
            <p style={{ fontWeight: 'bold' }}>
6. EN1A (S) - Standard Sulphurized Free-Cutting Steel
            </p>
Other Names: 230M07 (UK), 11SMn30, Free Cutting Steel

    <br/>Description:
EN1A (S) contains sulphur (~0.1-0.3%), which improves machinability, making it ideal for high-speed turning, threading, and drilling. Produces very smooth surface finish.

    <br/>
    Applications:
    <ul>
        <li>
        Precision machined components
        </li>
        <li>
        Nuts, bolts, screws
        </li>
        <li>
        Turned components requiring fine finish
        </li>
        <li>
        Electrical fittings, cycle/motor parts
        </li>
        </ul></div>

        <div>
            <p style={{ fontWeight: 'bold' }}>
7. EN1A (Pb) - Leaded Free-Cutting Steel
            </p>
Other Names: EN1A (Leaded), 11SMnPb30, 230M07Pb

    <br/>Description:
This is EN1A with added lead (0.15-0.35%), giving excellent machinability, minimal tool wear, and mirror-finish surfaces. Most preferred for CNC turning where high productivity is required.

    <br/>
    Applications:
    <ul>
        <li>
        Automatic lathe/CNC components
        </li>
        <li>
        High-precision turned parts
        </li>
        <li>
        Fasteners, connectors
        </li>
        <li>
        Bushes, pins, fittings with tight tolerances
        </li>
        </ul></div>
        </div>
        <p>
        Size range we offer: 
            <li>Rounds - 7.80 - 46.35mm
            </li>
            <li>Squares - 7.82 - 25.40mm
            </li>
            <li>Hexagons - 18.88 - 35.85mm
            </li>
        </p>
        </>
    )
}

export default ProductSection