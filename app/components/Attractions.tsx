"use client"

import { motion } from "framer-motion"
import { Music, Mic, Star } from "lucide-react"

const attractions = [
  {
    id: 1,
    name: "Banda Eco Ritmo",
    type: "Música Sustentável",
    description: "Instrumentos feitos com materiais reciclados e letras sobre preservação ambiental.",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    palco: "Palco Principal",
  },
  {
    id: 2,
    name: "Coletivo Verde",
    type: "Performance Artística",
    description: "Apresentação teatral sobre mudanças climáticas e sustentabilidade.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Palco Alternativo",
  },
  {
    id: 3,
    name: "DJ Luna Verde",
    type: "Música Eletrônica",
    description: "Set especial com sons da natureza e energia 100% renovável.",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    palco: "Palco Principal",
  },
  {
    id: 4,
    name: "Oficina de Instrumentos",
    type: "Atividade Interativa",
    description: "Aprenda a criar instrumentos musicais com materiais recicláveis.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Espaço Educativo",
  },
  {
    id: 5,
    name: "Coral da Natureza",
    type: "Música Coral",
    description: "Apresentação de canções tradicionais sobre a lua e a natureza.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Palco Alternativo",
  },
  {
    id: 6,
    name: "Exposição Lunar",
    type: "Arte Visual",
    description: "Instalações artísticas sobre fases da lua e ciclos naturais.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Galeria Verde",
  },
]

const filters = [
  { name: "Todas", value: "all" },
  { name: "Palco Principal", value: "Palco Principal" },
  { name: "Palco Alternativo", value: "Palco Alternativo" },
  { name: "Atividades", value: "Espaço Educativo" },
]

export default function Attractions() {
  return (
    <section id="attractions" className="section-padding bg-[var(--cream-white)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Atrações 2025</h2>
          <p className="text-content text-lg max-w-2xl mx-auto">
            Descubra os artistas e atividades que farão parte desta edição especial do Festival da Lua, celebrando a
            sustentabilidade através da arte e música.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className="px-6 py-2 rounded-full border-2 border-[var(--nature-green)] text-[var(--nature-green)] hover:bg-[var(--nature-green)] hover:text-white transition-all duration-300"
            >
              {filter.name}
            </button>
          ))}
        </motion.div>

        {/* Atrações Principais */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-[var(--dark-green)] mb-8 text-center flex items-center justify-center gap-2">
            <Star className="w-6 h-6 text-[var(--moon-yellow)]" />
            Atrações Principais
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {attractions
              .filter((attraction) => attraction.featured)
              .map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-[var(--moon-yellow)] text-[var(--dark-green)] px-3 py-1 rounded-full text-sm font-medium">
                      {attraction.palco}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="w-5 h-5 text-[var(--nature-green)]" />
                      <span className="text-[var(--nature-green)] font-medium">{attraction.type}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-[var(--dark-green)] mb-3">{attraction.name}</h4>
                    <p className="text-content">{attraction.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Outras Atrações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[var(--dark-green)] mb-8 text-center">Outras Atrações</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions
              .filter((attraction) => !attraction.featured)
              .map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[var(--nature-green)] text-white px-2 py-1 rounded-full text-xs">
                      {attraction.palco}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      <Mic className="w-4 h-4 text-[var(--nature-green)]" />
                      <span className="text-[var(--nature-green)] text-sm font-medium">{attraction.type}</span>
                    </div>
                    <h4 className="font-semibold text-[var(--dark-green)] mb-2">{attraction.name}</h4>
                    <p className="text-content text-sm">{attraction.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
