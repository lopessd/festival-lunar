"use client"

import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="section-padding festival-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Lua principal como elemento central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <img 
            src="/lua.png" 
            alt="Lua Festival" 
            className="w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
          />
        </div>
        {/* Elementos decorativos menores */}
        <div className="absolute top-20 sm:top-40 left-2 sm:left-10 text-2xl sm:text-4xl opacity-20">⭐</div>
        <div className="absolute bottom-10 sm:bottom-20 right-8 sm:right-40 text-3xl sm:text-5xl opacity-20">🌟</div>
        <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 text-xl sm:text-3xl opacity-20">✨</div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-orange text-sm sm:text-lg font-medium block mb-2">4ª EDIÇÃO</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-white">Festival da</span>
              <span className="block text-orange">Lua 2025</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-sm sm:text-lg text-white">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
              <span className="text-white">27 e 28 de Setembro</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-lg text-white">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange" />
              <span className="text-white">Centro de Convivência</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 relative"
          >
            {/* Elementos decorativos atrás do card */}
            <div className="absolute -top-4 -left-4 opacity-20">
              <img src="/arvore_flores.png" alt="" className="w-12 h-12 animate-pulse" style={{animationDuration: '3s'}} />
            </div>
            <div className="absolute -bottom-2 -right-6 opacity-15">
              <img src="/coelho.png" alt="" className="w-10 h-10 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '1s'}} />
            </div>
            
            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto border border-white/20 relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange mb-3">Sustentabilidade Ambiental</h2>
              <p className="text-sm sm:text-lg text-white">
                Em sintonia com a COP30, celebramos a conexão entre natureza e cultura através da música, arte e
                consciência ambiental.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#about"
                className="btn btn-secondary text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#attractions"
                className="btn btn-primary text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                Confira as Atrações
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
