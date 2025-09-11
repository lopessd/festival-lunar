"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Calendar } from "lucide-react"

const scheduleData = {
  "27/09": [
    {
      time: "14:00",
      event: "Abertura Oficial",
      location: "Palco Principal",
      type: "cerimonia",
      description: "Cerimônia de abertura com autoridades e apresentação do tema sustentabilidade",
    },
    {
      time: "15:00",
      event: "Oficina de Instrumentos Reciclados",
      location: "Espaço Educativo",
      type: "oficina",
      description: "Aprenda a criar instrumentos musicais com materiais recicláveis",
    },
    {
      time: "16:30",
      event: "Coral da Natureza",
      location: "Palco Alternativo",
      type: "musica",
      description: "Canções tradicionais sobre a lua e natureza",
    },
    {
      time: "18:00",
      event: "Banda Eco Ritmo",
      location: "Palco Principal",
      type: "musica",
      description: "Show principal com instrumentos sustentáveis",
    },
    {
      time: "20:00",
      event: "DJ Luna Verde",
      location: "Palco Principal",
      type: "musica",
      description: "Set eletrônico com energia 100% renovável",
    },
    {
      time: "22:00",
      event: "Observação da Lua",
      location: "Área Externa",
      type: "atividade",
      description: "Atividade astronômica com telescópios",
    },
  ],
  "28/09": [
    {
      time: "14:00",
      event: "Exposição Lunar",
      location: "Galeria Verde",
      type: "arte",
      description: "Instalações artísticas sobre fases da lua",
    },
    {
      time: "15:30",
      event: "Coletivo Verde",
      location: "Palco Alternativo",
      type: "performance",
      description: "Performance teatral sobre mudanças climáticas",
    },
    {
      time: "17:00",
      event: "Mesa Redonda: Sustentabilidade",
      location: "Auditório",
      type: "palestra",
      description: "Debate sobre meio ambiente e COP30",
    },
    {
      time: "19:00",
      event: "Show de Encerramento",
      location: "Palco Principal",
      type: "musica",
      description: "Grande show final com todos os artistas",
    },
    {
      time: "21:00",
      event: "Cerimônia de Encerramento",
      location: "Palco Principal",
      type: "cerimonia",
      description: "Encerramento oficial do festival",
    },
  ],
}

const typeColors = {
  cerimonia: "bg-[var(--moon-yellow)] text-[var(--dark-green)]",
  musica: "bg-[var(--nature-green)] text-white",
  oficina: "bg-[var(--light-green)] text-[var(--dark-green)]",
  performance: "bg-purple-500 text-white",
  atividade: "bg-blue-500 text-white",
  arte: "bg-pink-500 text-white",
  palestra: "bg-orange-500 text-white",
}

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="section-padding bg-gradient-to-br from-[var(--nature-green)] to-[var(--forest-green)]"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white">Programação</h2>
          <p className="text-white text-lg max-w-2xl mx-auto opacity-90">
            Confira a programação completa dos dois dias de festival, com horários e locais de cada atração.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(scheduleData).map(([date, events], dayIndex) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-[var(--nature-green)]" />
                <h3 className="text-2xl font-bold text-[var(--dark-green)]">
                  {dayIndex === 0 ? "Sexta-feira" : "Sábado"} - {date}
                </h3>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-1 text-[var(--nature-green)] font-semibold mb-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${typeColors[event.type as keyof typeof typeColors]}`}
                      >
                        {event.type}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--dark-green)] mb-1">{event.event}</h4>
                      <div className="flex items-center gap-1 text-[var(--forest-green)] text-sm mb-2">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </div>
                      <p className="text-content text-sm">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-[var(--moon-yellow)] mb-3">Informações Importantes</h3>
            <p className="text-white opacity-90">
              Todas as atividades são gratuitas. Recomendamos chegar com antecedência para garantir seu lugar. O
              festival acontece com chuva ou sol!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
