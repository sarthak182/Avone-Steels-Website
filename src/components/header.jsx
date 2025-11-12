import "../styles/header.css"
function HeaderComponent(){
    return(<div className="header-cont">
    <div className="header-header">
        <p className="avone-header">Avone Steels India</p>
        <p className="avone-subtext">Precision Bright Bars for the World</p>
    </div>
    <div className="header-buttons">
    <button className="product-button">View Product Range</button>
    <button className="quote-button">Request A Quote</button>
    </div>
    </div>)
}
export default HeaderComponent