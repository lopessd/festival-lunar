"use client"

import { motion } from "framer-motion"

export default function About() {
  const milestones = ["4ª edição consecutiva", "Tema sustentabilidade ambiental", "Centro de Convivência reformado"]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Sobre o Festival da Lua
        </motion.h2>
        <div className="flex flex-wrap items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 mb-10 md:mb-0"
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Festival da Lua com elementos sustentáveis"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pl-10"
          >
            <p className="text-content text-lg mb-6">
              O Festival da Lua celebra a tradição milenar chinesa do Festival do Meio do Outono, unindo cultura, música
              e consciência ambiental. Em sua quarta edição, o evento acontece pela primeira vez no recém-reformado
              Centro de Convivência, trazendo como tema central a Sustentabilidade Ambiental em conexão com a COP30.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[var(--forest)] mb-4">Edições Anteriores</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[var(--sage)] rounded-full mr-3"></div>
                  <span className="text-content">2022 - 1ª Edição: Tradições Ancestrais</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[var(--sage)] rounded-full mr-3"></div>
                  <span className="text-content">2023 - 2ª Edição: Harmonia Cultural</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[var(--sage)] rounded-full mr-3"></div>
                  <span className="text-content">2024 - 3ª Edição: Conexões Globais</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[var(--golden)] rounded-full mr-3"></div>
                  <span className="text-content font-semibold">2025 - 4ª Edição: Sustentabilidade Ambiental</span>
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
                    className="w-6 h-6 mr-2 text-[var(--forest)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
