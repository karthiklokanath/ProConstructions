import './App.css'
import About from './components/About'
import FlowNav from './components/FlowNav'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <FlowNav />
      <About />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
