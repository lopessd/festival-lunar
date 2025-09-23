"use client"

import { motion } from "framer-motion"

export default function About() {
  const milestones = ["4ª edição consecutiva", "Tema sustentabilidade ambiental", "Centro de Convivência reformado"]

  return (
    <section id="about" className="section-padding bg-[var(--festival-green-dark)] relative overflow-hidden">      
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--moon-yellow)] text-center mb-8 tracking-wide"
        >
          <span className="font-normal">SOBRE O </span>
          <span className="font-bold">FESTIVAL DA LUA</span>
        </motion.h2>
        <div className="flex flex-wrap items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 mb-4 md:mb-0 relative"
          >
            <div className="relative bg-gradient-to-br from-green-light/20 to-orange/10 rounded-lg p-4 sm:p-6">
              <img
                src="/imagem_sustenbtabilidade.png"
                alt="Sustentabilidade Ambiental - Festival da Lua 2025"
                className="w-full h-auto mx-auto drop-shadow-lg scale-105"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pl-4 lg:pl-6"
          >
            <p className="text-content text-sm sm:text-lg mb-6">
              O Festival da Lua celebra a tradição milenar chinesa do Festival do Meio do Outono, unindo cultura, música
              e consciência ambiental. Em sua quarta edição, o evento acontece pela primeira vez no recém-reformado
              Centro de Convivência, trazendo como tema central a Sustentabilidade Ambiental em conexão com a COP30.
            </p>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-orange mb-4">Edições Anteriores</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-light rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-content text-sm sm:text-base">2022 - 1ª Edição: Tradições Ancestrais</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-light rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-content text-sm sm:text-base">2023 - 2ª Edição: Harmonia Cultural</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-light rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-content text-sm sm:text-base">2024 - 3ª Edição: Conexões Globais</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-content font-semibold text-sm sm:text-base">2025 - 4ª Edição: Sustentabilidade Ambiental</span>
                </div>
              </div>
            </div>

            <ul className="mb-6">
              {milestones.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center mb-2 text-content"
                >
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 mr-2 text-orange flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
