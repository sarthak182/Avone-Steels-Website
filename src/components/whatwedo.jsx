import WoodenSlab from "../images/wooden-slab2.jpg";
import Shotblasting from "../images/shotblasting.jpg";
import Pointing from "../images/pointing.jpg";
import DrawBench from "../images/drawbench.jpg";
import Straightening from "../images/straightening.jpg";
import CuttingLength from "../images/cutting.jpg";
function WhatWeDo(){
    return(<>
    <h2>What We Do</h2>
    <p>At Aditya Steels, we specialise in the manufacturing and processing of high-precision 
        bright bars across multiple grades and profiles. With decades of industry experience, 
        modern infrastructure, and a commitment to consistency, we deliver material that meets the 
        exacting standards of engineering and manufacturing companies across India and overseas.</p>
    <p>
        1. Raw Material Inspection & Sorting

    We begin by receiving hot rolled bars or coils from trusted mills. Each lot undergoes strict checks for:
	•	Heat numbers & chemical composition
	•	Surface defects
	•	Diameter variation
	•	Hardness & mechanical properties
	•	Straightness

Moisture Prevention:
All raw materials and finished goods are stored on elevated wooden slabs, never directly on the floor.
This prevents steel from absorbing moisture, protects surface quality, and ensures rust-free storage even 
during humid conditions.

Only approved raw material proceeds for further processing.
    </p> <img src={WoodenSlab} style={{ height: "200px" }}/>
    <p>
        2. Shot Blasting
    Bars are passed through our shot blasting machine to remove:
	•	Rust
	•	Mill scale
	•	Oil
	•	Surface impurities

Why it matters:
A clean, uniform surface ensures smoother drawing, longer die life, and improved final brightness.
    </p>
    <img src={Shotblasting} style={{ height: "200px" }}/>
    <p>
        3. Pointing
The front end of each bar is reduced using a pointer machine so it can smoothly enter the drawing die.

Purpose:
	•	Enables smooth die entry
	•	Reduces load on the draw bench
	•	Prevents bar breakage during drawing

The pointed section is later cut off and sold as scrap.
    </p>
    <img src={Pointing} style={{ height: "200px" }}/>
    <p>
        4. Cold Drawing

Bars are pulled through precision steel dies to reduce them to exact sizes.

Cold drawing improves:
	•	Dimensional accuracy (tight tolerances)
	•	Straightness
	•	Mechanical properties
	•	Surface finish
	•	Tensile strength

This process gives the bar its signature “bright” appearance and precision.
    </p>
    <img src={DrawBench} style={{ height: "200px" }}/>
    <p>5. Straightening

Drawn bars may develop slight bends due to internal stresses.
They are passed through roller straightening machines to achieve perfect linearity.

Benefits:
	•	Better machinability
	•	Zero wobble for shaft-making
	•	CNC-friendly straightness standards</p>
    <img src={Straightening} style={{ height: "200px" }}/>
<p>6. Cutting to Length

Bars are cut to customer-specified lengths using hydraulic/semi-automatic cutting machines.

We support:
	•	3m and 6m standard lengths
	•	All custom lengths
	•	Short bars for machining
	•	Tight tolerance cutting</p>
    <img src={CuttingLength} style={{ height: "200px" }}/>
    </>)
}
export default WhatWeDo
