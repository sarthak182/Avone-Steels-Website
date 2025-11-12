import './App.css';
import AboutUs from './components/about-us';
import ContactUs from './components/contact-us';
import ExportsSection from './components/exports';
import HeaderComponent from './components/header';
import ProductSection from './components/products';
import Trashy from './components/trash';
function App() {
  return (
    <div className="App">

      <HeaderComponent/>
      <section><AboutUs/></section>
      <section><ProductSection/></section>
      <section><ExportsSection/></section>
      <section><ContactUs/></section>
    </div>
  );
}

export default App;
