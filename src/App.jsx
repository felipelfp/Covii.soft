import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import NexusChat from './components/NexusChat'

// Viverdeia Components
import ViverdeiaTrustWall from './components/viverdeia/ViverdeiaTrustWall'
import ViverdeiaSolutions from './components/viverdeia/ViverdeiaSolutionCards'

function App() {
  return (
    <div className="app-container">
      <div className="bg-mesh"></div>
      <img src="/professional_ai_robot.png" className="ai-bg-asset" alt="" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        
        {/* Covii.soft Unified Sections */}
        <ViverdeiaTrustWall />
        <ViverdeiaSolutions />
        
        <Skills />
        <Experience />
        
        {/* Team and Pricing sections removed by user request */}
        
        <Contact />
      </main>
      <Footer />
      <CustomCursor />
      <NexusChat />
    </div>
  )
}

export default App
