"use client"

import Link from "next/link"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="section-padding festival-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 text-6xl">🌙</div>
        <div className="absolute top-40 left-10 text-4xl">⭐</div>
        <div className="absolute bottom-20 right-40 text-5xl">🌟</div>
        <div className="absolute bottom-40 left-20 text-3xl">✨</div>
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
            <span className="text-yellow-200 text-lg font-medium block mb-2">4ª EDIÇÃO</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-white">Festival da</span>
              <span className="block text-yellow-200 moon-glow">Lua 2025</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-lg text-white">
              <Calendar className="w-5 h-5 text-yellow-200" />
              <span>27 e 28 de Setembro</span>
            </div>
            <div className="flex items-center gap-2 text-lg text-white">
              <MapPin className="w-5 h-5 text-yellow-200" />
              <span>Centro de Convivência</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-3">Sustentabilidade Ambiental</h2>
              <p className="text-lg text-white">
                Em sintonia com a COP30, celebramos a conexão entre natureza e cultura através da música, arte e
                consciência ambiental.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#about"
                className="btn btn-secondary text-lg px-8 py-4 bg-yellow-400 text-green-900 hover:bg-yellow-300"
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#attractions"
                className="btn btn-primary text-lg px-8 py-4 bg-white text-green-800 hover:bg-gray-100"
              >
                Confira as Atrações
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center text-yellow-200 mb-6">Vídeo de Divulgação</h3>
            <div className="relative aspect-video bg-black bg-opacity-50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-4 mx-auto cursor-pointer hover:bg-yellow-300 transition-all">
                    <svg className="w-8 h-8 text-green-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white">Clique para assistir</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
