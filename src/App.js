import 'react-modal-overlay/dist/index.css'
import './App.sass'
import Header from './components/Header'
import AllEmployees from './components/AllEmployees'
import Footer from './components/Footer'
import OfferBanner from './components/OfferBanner'
import Carousel from './components/Carousel'

function App () {
  return (
    <div className='App'>
      <OfferBanner />
      <Header />
      <div id='main'>
        <Carousel />
        <AllEmployees />
      </div>
      <Footer />
    </div>
  )
}

export default App
