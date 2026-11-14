import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stack from './components/Stack.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
