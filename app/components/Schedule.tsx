"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Calendar } from "lucide-react"

const scheduleData = {
  "27/09": [
    {
      time: "10:00",
      event: "Abertura Oficial",
      location: "Saguão",
      type: "cerimonia",
      description: "Cerimônia de abertura do Festival da Lua",
    },
    {
      time: "10:30",
      event: "DJ Gui Bendinskas",
      location: "Saguão",
      type: "musica",
      description: "DJ brasileiro especializado em House Music com músicas chinesas",
    },
    {
      time: "11:30",
      event: "Dança do Leão",
      location: "Palco Principal",
      type: "danca",
      description: "Manifestação tradicional chinesa com Shaolin Chan Cultural",
    },
    {
      time: "12:15",
      event: "Dança do Dragão", 
      location: "Palco Principal",
      type: "danca",
      description: "Celebração vibrante da cultura chinesa - Shaolin Chan Cultural",
    },
    {
      time: "13:00",
      event: "Dança do Leque",
      location: "Palco Principal", 
      type: "danca",
      description: "Expressão artística com movimentos ritmados - Shaolin Chan Cultural",
    },
    {
      time: "14:00",
      event: "Dança das Sombrinhas",
      location: "Palco Principal",
      type: "danca", 
      description: "Instituto Confúcio (Unicamp) - Inspirada na 'chuva alegre'",
    },
    {
      time: "15:00",
      event: "Contorcionismo e Diabolô",
      location: "Palco Principal",
      type: "performance",
      description: "Apresentação com Aurinha - Arte tradicional chinesa",
    },
    {
      time: "16:00",
      event: "C-Pop - Dança Pop Chinesa",
      location: "Palco Principal", 
      type: "danca",
      description: "Cia Eclipse - Fusão entre culturas brasileira e chinesa",
    },
    {
      time: "17:00",
      event: "Brincadeiras Poéticas",
      location: "Espaço Infantil",
      type: "infantil",
      description: "Trio Carolina Peixoto, Dhara e Thiago Peixoto",
    },
    {
      time: "18:00",
      event: "Hua Xing - Dança Chinesa",
      location: "Palco Principal",
      type: "danca", 
      description: "Hua Xing São Paulo - Única organização oficialmente reconhecida no Brasil",
    },
    {
      time: "19:30",
      event: "Duo Gao Shan convida Tony Lee",
      location: "Palco Principal",
      type: "musica",
      description: "Música tradicional chinesa com cítara, percussão e sheng",
    },
  ],
  "28/09": [
    {
      time: "10:00",
      event: "Vivências de Diabolô e Prato",
      location: "Espaço Oficinas",
      type: "oficina",
      description: "Aurinha - Aprenda a arte tradicional chinesa do diabolô",
    },
    {
      time: "11:00",
      event: "Oficina de Nó Chinês",
      location: "Espaço Oficinas", 
      type: "oficina",
      description: "Ana Chinchila e Gabriel Cavalcante - Arte milenar",
    },
    {
      time: "11:00",
      event: "Oficina de Lanterna Chinesa",
      location: "Espaço Oficinas",
      type: "oficina", 
      description: "Ana Chinchila e Gabriel Cavalcante - Confecção de lanternas",
    },
    {
      time: "12:00",
      event: "Padronagem Chinesa",
      location: "Espaço Oficinas",
      type: "oficina",
      description: "Rose XX - Técnicas tradicionais de padronagem",
    },
    {
      time: "13:00",
      event: "Origami e Corte de Papel Chinês",
      location: "Espaço Oficinas",
      type: "oficina",
      description: "Nina Pupo e Marcelo Alves - Arte tradicional da dobradura",
    },
    {
      time: "14:00",
      event: "Escrita Chinesa",
      location: "Espaço Oficinas",
      type: "oficina",
      description: "Instituto Confúcio (Unicamp) - Caligrafia chinesa",
    },
    {
      time: "15:00",
      event: "Máscaras de Papel",
      location: "Espaço Infantil",
      type: "infantil", 
      description: "Pedro Elias e Elisa Suzuki - Oficina lúdica para crianças",
    },
    {
      time: "16:00",
      event: "Cerimônia do Chá Chinesa",
      location: "Espaço Zen",
      type: "cerimonia",
      description: "Espaço Shaolin de Botucatu - Gongfu Cha com Prof. Ronaldo Fogueral",
    },
    {
      time: "17:00",
      event: "Drone Lab",
      location: "Área Externa",
      type: "tecnologia", 
      description: "Carlos Candido - Montagem e pilotagem de drones",
    },
    {
      time: "18:30",
      event: "Trio Gao Shan",
      location: "Palco Principal",
      type: "musica",
      description: "Música tradicional chinesa - formação 'Seda e Bambu'",
    },
    {
      time: "20:00",
      event: "Encerramento",
      location: "Palco Principal", 
      type: "cerimonia",
      description: "Cerimônia de encerramento do Festival da Lua",
    },
  ],
}

const typeColors = {
  cerimonia: "bg-[var(--moon-yellow)] text-[var(--dark-green)]",
  musica: "bg-[var(--nature-green)] text-white",
  oficina: "bg-[var(--light-green)] text-[var(--dark-green)]",
  performance: "bg-purple-500 text-white",
  danca: "bg-pink-500 text-white",
  infantil: "bg-blue-500 text-white",
  tecnologia: "bg-gray-600 text-white",
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
          className="text-center mb-16 relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--moon-yellow)] text-center mb-8 tracking-wide"
          >
            <span className="font-normal"></span>
            <span className="font-bold">PROGRAMAÇÃO</span>
          </motion.h2>
          <p className="text-white text-lg max-w-2xl mx-auto opacity-90 mb-6">
            Confira a programação completa dos dois dias de festival, com horários e locais de cada atração.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {Object.entries(scheduleData).map(([date, events], dayIndex) => (
            <motion.div
              key={date}
              initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--nature-green)]" />
                <h3 className="text-lg sm:text-2xl font-bold text-[var(--dark-green)]">
                  <span className="hidden sm:inline">{date} - {date === "27/09" ? "Sábado" : "Domingo"}</span>
                  <span className="sm:hidden">{date} ({date === "27/09" ? "Sáb" : "Dom"})</span>
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-1 text-[var(--nature-green)] font-semibold mb-1 text-sm sm:text-base">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        {event.time}
                      </div>
                      <span
                        className={`inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-medium ${typeColors[event.type as keyof typeof typeColors]}`}
                      >
                        {event.type}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[var(--dark-green)] mb-1 text-sm sm:text-base">{event.event}</h4>
                      <div className="flex items-center gap-1 text-[var(--forest-green)] text-xs sm:text-sm mb-1 sm:mb-2">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <p className="text-green-700 text-xs sm:text-sm leading-relaxed">{event.description}</p>
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
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--moon-yellow)] mb-2 sm:mb-3">Informações Importantes</h3>
            <p className="text-white opacity-90 text-sm sm:text-base">
              Todas as atividades são gratuitas. Recomendamos chegar com antecedência para garantir seu lugar. O
              festival acontece com chuva ou sol!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
