import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Attractions from "./components/Attractions"
import Schedule from "./components/Schedule"
import Workshops from "./components/Workshops"
import Exhibitions from "./components/Exhibitions"
import UsefulInfo from "./components/UsefulInfo"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--festival-green-dark)] relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Attractions />
        <Schedule />
        <Workshops />
        <Exhibitions />
        <UsefulInfo />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
