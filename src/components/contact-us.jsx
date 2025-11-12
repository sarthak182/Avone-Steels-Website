import "../styles/contactus.css";
import { useState } from "react";
function ContactUs(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orga, setOrga] = useState("");
    const [requirement, setRequirement] = useState("");

    const handleClick=async()=>{
        alert("Hello "+name+"Your order has been placed successfully "+requirement+"for the following company: "+orga);
    }
    return(
        <>
        <h2>Contact Us
        </h2>
        <div className="contactus-cont">
        <input type="text" placeholder="Your Name" value={name}             onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Your Email" value={email}             onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder="Your Organization" value={orga}             onChange={(e) => setOrga(e.target.value)}/>
        {/* <input type="text" placeholder="Your Requirements (Grade / Quantity)" value={requirement}             onChange={(e) => setRequirement(e.target.value)}/> */}
        <textarea
            placeholder="Your Requirements (Grade / Quantity)"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            rows="5"
            cols="40"
        />
        <button className="send-enquiry-btn" onClick={handleClick}>Send Enquiry</button>
        <p><strong>Address:</strong> Plot No 19A, Sector XX, Faridabad - 121004, Haryana, India</p>
        <p><strong>Email:</strong> contact@avonesteels.com | <strong>Phone:</strong> +91-8383904038</p>
        </div>
        </>
    )
}
export default ContactUs