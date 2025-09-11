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
    <section id="attractions" className="section-padding bg-[var(--festival-green-dark)] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-4 opacity-10">
        <img src="/arvore_flores.png" alt="" className="w-16 h-16 animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} />
      </div>
      <div className="absolute bottom-32 right-8 opacity-15">
        <img src="/coelho.png" alt="" className="w-14 h-14 animate-bounce" style={{animationDuration: '3.5s'}} />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="section-title">Atrações 2025</h2>
          <p className="text-content text-lg max-w-2xl mx-auto mb-6">
            Descubra os artistas e atividades que farão parte desta edição especial do Festival da Lua, celebrando a
            sustentabilidade através da arte e música.
          </p>
          
          {/* Coelho decorativo */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute right-0 top-0 hidden lg:block opacity-80">
              <img
                src="/coelho.png"
                alt="Coelho da natureza"
                className="w-24 h-24 xl:w-32 xl:h-32 object-contain transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              className="px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border-2 border-green-light text-green-light hover:bg-green-light hover:text-green-dark transition-all duration-300 text-sm sm:text-base"
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
          <h3 className="text-lg sm:text-2xl font-semibold text-orange mb-6 sm:mb-8 text-center flex items-center justify-center gap-2">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange" />
            Atrações Principais
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {attractions
              .filter((attraction) => attraction.featured)
              .map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                >
                  {/* Elemento decorativo no card */}
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 opacity-20 z-10">
                      <img src="/arvore_flores.png" alt="" className="w-8 h-8 animate-pulse" />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="absolute -bottom-1 -left-1 opacity-25 z-10">
                      <img src="/coelho.png" alt="" className="w-6 h-6 animate-bounce" style={{animationDuration: '2s'}} />
                    </div>
                  )}
                  <div className="relative overflow-hidden">
                    <img
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-orange text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {attraction.palco}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-1 sm:gap-2 mb-2">
                      <Music className="w-4 h-4 sm:w-5 sm:h-5 text-green-light" />
                      <span className="text-green-light font-medium text-sm sm:text-base">{attraction.type}</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-orange mb-2 sm:mb-3">{attraction.name}</h4>
                    <p className="text-content text-sm sm:text-base">{attraction.description}</p>
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
          <h3 className="text-lg sm:text-2xl font-semibold text-orange mb-6 sm:mb-8 text-center">Outras Atrações</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                    <div className="absolute top-2 right-2 bg-green-light text-green-dark px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs">
                      {attraction.palco}
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center gap-1 mb-1 sm:mb-2">
                      <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-green-light" />
                      <span className="text-green-light text-xs sm:text-sm font-medium">{attraction.type}</span>
                    </div>
                    <h4 className="font-semibold text-orange mb-1 sm:mb-2 text-sm sm:text-base">{attraction.name}</h4>
                    <p className="text-content text-xs sm:text-sm leading-relaxed">{attraction.description}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
