import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Attractions from "./components/Attractions"
import Schedule from "./components/Schedule"
import Gallery from "./components/Gallery"
import UsefulInfo from "./components/UsefulInfo"
import News from "./components/News"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--cream-white)]">
      <Navbar />
      <Hero />
      <About />
      <Attractions />
      <Schedule />
      <Gallery />
      <UsefulInfo />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}
