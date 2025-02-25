import Devices from './components/Devices'
import Downloads from './components/Downloads'
import FAQ from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Shows from './components/Shows'
import Watch from './components/Watch'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Hero />
      <Shows />
      <Plans />
      <Watch />
      <Downloads />
      <Devices />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
