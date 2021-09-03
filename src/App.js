import 'react-modal-overlay/dist/index.css'
import './App.sass';
import Header from "./components/Header";
import AllEmployees from './components/AllEmployees';
import Footer from "./components/Footer";
import OfferBanner from './components/OfferBanner';
import Newsletter from './components/Newsletter';
import ShippingCostCalculator from './components/ShippingCostCalculator';

function App() {
  return (
    <div className="App">
      <OfferBanner />
      <Header />
      <Newsletter />
      <ShippingCostCalculator />
      <AllEmployees />
      <Footer />
    </div>
  );
}

export default App;
