'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[var(--festival-green-dark)] text-white py-8 sm:py-12 border-t border-green-light border-opacity-20 relative overflow-hidden">
      {/* Elementos decorativos do footer */}
      <div className="absolute top-4 right-8 opacity-15">
        <img src="/arvore_flores.png" alt="" className="w-12 h-12 animate-pulse" style={{animationDuration: '5s'}} />
      </div>
      <div className="absolute bottom-8 left-12 opacity-10">
        <img src="/coelho.png" alt="" className="w-10 h-10 animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-2xl font-bold text-orange">🌙 Festival da Lua</h3>
              <img 
                src="/coelho.png" 
                alt="Coelho natureza" 
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain opacity-80" 
              />
            </div>
            <p className="mb-3 sm:mb-4 text-green-light text-sm sm:text-base">Celebrando a sustentabilidade ambiental através da música, arte e cultura.</p>
            <div className="flex space-x-3 sm:space-x-4">
              <Link href="#" className="hover:text-orange transition duration-300">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="hover:text-orange transition duration-300">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="hover:text-orange transition duration-300">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <Link href="#" className="hover:text-orange transition duration-300">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-base sm:text-xl font-semibold mb-3 sm:mb-4 text-orange">Navegação</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="#home" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Início</Link></li>
              <li><Link href="#about" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Sobre</Link></li>
              <li><Link href="#attractions" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Atrações</Link></li>
              <li><Link href="#schedule" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Programação</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-base sm:text-xl font-semibold mb-3 sm:mb-4 text-orange">Informações</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="#gallery" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Galeria</Link></li>
              <li><Link href="#info" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Informações Úteis</Link></li>
              <li><Link href="#news" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Notícias</Link></li>
              <li><Link href="#contact" className="text-green-light hover:text-orange transition duration-300 text-sm sm:text-base">Contato</Link></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-base sm:text-xl font-semibold mb-3 sm:mb-4 text-orange">Evento</h4>
            <p className="mb-1.5 sm:mb-2 text-green-light text-sm sm:text-base">📅 27 e 28 de Setembro</p>
            <p className="mb-1.5 sm:mb-2 text-green-light text-sm sm:text-base">📍 Centro de Convivência</p>
            <p className="mb-1.5 sm:mb-2 text-green-light text-sm sm:text-base">🎭 4ª Edição</p>
            <p className="text-green-light text-sm sm:text-base">🌱 Sustentabilidade Ambiental</p>
          </motion.div>
        </div>
        <div className="border-t border-green-light border-opacity-20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-green-light text-sm sm:text-base">&copy; {new Date().getFullYear()} Festival da Lua. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
