"use client"

import { motion } from "framer-motion"
import { MapPin, Car, Utensils, Accessibility, Shield, Clock } from "lucide-react"

const infoSections = [
  {
    title: "Local do Evento",
    icon: MapPin,
    content: [
      "Centro de Convivência Cultural de Campinas 'Carlos Gomes'",
      "R. Gen. Osório - Cambuí, Campinas - SP, 13025-066",
      "Capacidade para 5.000 pessoas",
      "Espaços cobertos e ao ar livre",
    ],
    hasMap: true,
  },
  {
    title: "Como Chegar",
    icon: Car,
    content: [
      "🚌 Linhas de ônibus: 101, 205, 308",
      "🚗 Estacionamento gratuito disponível",
      "🚴 Bicicletário com 200 vagas",
      "🚶 A 10 minutos da estação central",
    ],
  },
  {
    title: "Estrutura",
    icon: Utensils,
    content: [
      "Food trucks com opções veganas",
      "Pontos de hidratação gratuitos",
      "Banheiros ecológicos",
      "Área de descanso com sombra",
    ],
  },
  {
    title: "Acessibilidade",
    icon: Accessibility,
    content: [
      "Rampas de acesso em todos os espaços",
      "Área reservada para cadeirantes",
      "Intérprete de Libras nos shows",
      "Banheiros adaptados",
    ],
  },
]

const rules = [
  "Entrada gratuita para todas as idades",
  "Proibido vidros, latas e objetos cortantes",
  "Permitido levar água em garrafas plásticas",
  "Não é permitido fumar nas áreas cobertas",
  "Animais de estimação não são permitidos",
  "Respeite o meio ambiente - use as lixeiras",
]

export default function UsefulInfo() {
  return (
    false ? (
    <section id="info" className="section-padding bg-[var(--cream-white)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--moon-yellow)] text-center mb-8 tracking-wide"
          >
            <span className="font-normal">INFORMAÇÕES </span>
            <span className="font-bold">ÚTEIS</span>
          </motion.h2>
          <p className="text-content text-lg max-w-2xl mx-auto">
            Tudo que você precisa saber para aproveitar ao máximo o Festival da Lua 2025.
          </p>
        </motion.div>

        {/* Informações Principais */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {infoSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[var(--nature-green)] rounded-full flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--dark-green)]">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-content flex items-start gap-2">
                    <span className="w-2 h-2 bg-[var(--moon-yellow)] rounded-full mt-2 flex-shrink-0"></span>
                    {section.hasMap && itemIndex === 1 ? (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors"
                      >
                        {item}
                      </a>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mapa Interativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-[var(--dark-green)] mb-6 text-center">Localização</h3>
          
          {/* Título do local - apenas mobile */}
          <h4 className="block sm:hidden text-lg font-semibold text-[var(--dark-green)] mb-4 text-center">Centro de Convivência Cultural de Campinas "Carlos Gomes"</h4>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden mb-4">
              <iframe
                src="https://maps.google.com/maps?q=R.+Gen.+Os%C3%B3rio+-+Cambu%C3%AD,+Campinas+-+SP,+13025-066&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
            <div className="text-center">
              {/* Título do local - desktop */}
              <h4 className="hidden sm:block text-xl font-semibold text-[var(--dark-green)] mb-2">Centro de Convivência Cultural de Campinas "Carlos Gomes"</h4>
              <p className="text-content text-sm sm:text-base mb-3 sm:mb-4">R. Gen. Osório - Cambuí, Campinas - SP, 13025-066</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Centro+de+Conviv%C3%AAncia+Cultural+de+Campinas+Carlos+Gomes+R.+Gen.+Os%C3%B3rio+Cambu%C3%AD+Campinas+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[var(--nature-green)] text-white rounded-full hover:bg-[var(--forest-green)] transition-colors text-center"
                >
                  Abrir no Google Maps
                </a>
                <a
                  href="https://waze.com/ul?q=Centro+de+Conviv%C3%AAncia+Cultural+de+Campinas+Carlos+Gomes+R.+Gen.+Os%C3%B3rio+Cambu%C3%AD+Campinas+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center"
                >
                  Abrir no Waze
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Regras do Evento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[var(--nature-green)] to-[var(--forest-green)] rounded-2xl p-8 text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-[var(--moon-yellow)]" />
            <h3 className="text-2xl font-semibold">Regras do Evento</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {rules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="w-6 h-6 bg-[var(--moon-yellow)] rounded-full flex items-center justify-center text-[var(--dark-green)] font-bold text-sm flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="opacity-90">{rule}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Horários de Funcionamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-[var(--nature-green)]" />
              <h3 className="text-xl font-semibold text-[var(--dark-green)]">Horários</h3>
            </div>
            <div className="space-y-2 text-content">
              <p>
                <strong>27/09 (Sábado):</strong> 14h às 23h
              </p>
              <p>
                <strong>28/09 (Domingo):</strong> 14h às 22h
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    ) : null
  )
}
