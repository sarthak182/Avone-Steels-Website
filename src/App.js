import './App.css';
import { LightboxProvider } from './components/lightbox';
import Navbar from './components/navbar';
import HeaderComponent from './components/header';
import AboutUs from './components/about-us';
import OurVision from './components/vision';
import WhatWeDo from './components/whatwedo';
import ProductSection from './components/products';
import IndustriesServed from './components/industries';
import WhyChoose from './components/whychoose';
// import ExportsSection from './components/exports'; // Global Exports — temporarily disabled
import ContactUs from './components/contact-us';
import Footer from './components/footer';

function App() {
  return (
    <LightboxProvider>
      <div className="App">
        <Navbar />
        <HeaderComponent />
        <main>
          <AboutUs />
          <OurVision />
          <WhatWeDo />
          <ProductSection />
          <IndustriesServed />
          <WhyChoose />
          {/* <ExportsSection /> Global Exports — temporarily disabled */}
          <ContactUs />
        </main>
        <Footer />
      </div>
    </LightboxProvider>
  );
}

export default App;
