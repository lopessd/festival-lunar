"use client"

import { motion } from "framer-motion"
import { MapPin, Car, Utensils, Accessibility, Shield, Clock } from "lucide-react"

const infoSections = [
  {
    title: "Local do Evento",
    icon: MapPin,
    content: [
      "Centro de Convivência (recém-reformado)",
      "Rua das Palmeiras, 123 - Centro",
      "Capacidade para 5.000 pessoas",
      "Espaços cobertos e ao ar livre",
    ],
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
    <section id="info" className="section-padding bg-[var(--cream-white)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Informações Úteis</h2>
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
              {/* Elementos decorativos específicos para cada card */}
              {index === 0 && (
                <div className="absolute -top-2 -right-2 opacity-20 z-10">
                  <img src="/lua.png" alt="" className="w-8 h-8 animate-pulse" style={{animationDuration: '3s'}} />
                </div>
              )}
              {index === 1 && (
                <div className="absolute -bottom-1 -left-1 opacity-15 z-10">
                  <img src="/coelho.png" alt="" className="w-7 h-7 animate-bounce" style={{animationDuration: '2.5s'}} />
                </div>
              )}
              {index === 2 && (
                <div className="absolute -top-1 -left-1 opacity-20 z-10">
                  <img src="/arvore_flores.png" alt="" className="w-8 h-8 decorative-soft-pulse" />
                </div>
              )}
              {index === 3 && (
                <div className="absolute -bottom-2 -right-2 opacity-15 z-10">
                  <img src="/coelho.png" alt="" className="w-6 h-6 decorative-float" />
                </div>
              )}
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
                    {item}
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
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--light-green)] to-[var(--nature-green)] opacity-20"></div>
              <div className="text-center z-10">
                <MapPin className="w-16 h-16 text-[var(--nature-green)] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-[var(--dark-green)] mb-2">Centro de Convivência</h4>
                <p className="text-content">Rua das Palmeiras, 123 - Centro</p>
                <button className="mt-4 px-6 py-2 bg-[var(--nature-green)] text-white rounded-full hover:bg-[var(--forest-green)] transition-colors">
                  Abrir no Google Maps
                </button>
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
                <strong>27/09 (Sexta):</strong> 14h às 23h
              </p>
              <p>
                <strong>28/09 (Sábado):</strong> 14h às 22h
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
