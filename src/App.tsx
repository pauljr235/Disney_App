import Devices from './components/Devices'
import Downloads from './components/Downloads'
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
    </>
  )
}

export default App
