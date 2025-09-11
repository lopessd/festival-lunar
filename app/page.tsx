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
    <main className="min-h-screen bg-[var(--festival-green-dark)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Coelho no canto superior direito */}
        <img 
          src="/coelho.png" 
          alt="" 
          className="absolute top-20 right-4 w-16 h-16 sm:w-20 sm:h-20 opacity-30 animate-bounce" 
          style={{animationDuration: '3s'}}
        />
        
        {/* Árvore com flores no canto inferior esquerdo */}
        <img 
          src="/arvore_flores.png" 
          alt="" 
          className="absolute bottom-10 left-4 w-20 h-20 sm:w-24 sm:h-24 opacity-25 animate-pulse" 
          style={{animationDuration: '4s'}}
        />
        
        {/* Coelho menor no meio direito */}
        <img 
          src="/coelho.png" 
          alt="" 
          className="absolute top-1/2 right-8 w-12 h-12 opacity-20 animate-bounce" 
          style={{animationDuration: '2.5s', animationDelay: '1s'}}
        />
        
        {/* Árvore no canto superior esquerdo */}
        <img 
          src="/arvore_flores.png" 
          alt="" 
          className="absolute top-32 left-8 w-14 h-14 opacity-15 animate-pulse" 
          style={{animationDuration: '3.5s', animationDelay: '0.5s'}}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
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
      </div>
    </main>
  )
}
