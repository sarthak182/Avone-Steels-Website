import './App.css';
import AboutUs from './components/about-us';
import ContactUs from './components/contact-us';
import ExportsSection from './components/exports';
import HeaderComponent from './components/header';
import ProductSection from './components/products';
import OurVision from './components/vision';
import WhatWeDo from './components/whatwedo';
import IndustriesServed from './components/industries';
import WhyChoose from './components/whychoose';
function App() {
  return (
    <div className="App">

      <HeaderComponent/>
      <section><AboutUs/></section>
      <section><OurVision/></section>
      <section><WhatWeDo/></section>
      <section><ProductSection/></section>
      <section><IndustriesServed/></section>
      <section><WhyChoose/></section>
      <section><ContactUs/></section>
    </div>
  );
}

export default App;
