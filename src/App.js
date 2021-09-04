import 'react-modal-overlay/dist/index.css'
import './App.sass'
import Header from './components/Header'
import AllEmployees from './components/AllEmployees'
import Footer from './components/Footer'
import OfferBanner from './components/OfferBanner'
import Newsletter from './components/Newsletter'
import ShippingCostCalculator from './components/ShippingCostCalculator'

function App () {
  return (
    <div className='App'>
      <OfferBanner />
      <Header />
      <div id='content'>
        <div id='main'>
          <AllEmployees />
        </div>
        <aside id='sidebar'>
          <Newsletter />
          <ShippingCostCalculator />
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default App
