"use client"

import { motion } from "framer-motion"
import { Music, Mic, Star, Users, Heart, Sparkles, Globe, Palette } from "lucide-react"

const attractions = [
  {
    id: 1,
    name: "Shaolin Chan Cultural",
    type: "Danças Tradicionais Chinesas",
    description: "Dança do Leão, Dragão e Leque. Manifestações culturais tradicionais da China, praticadas há séculos como símbolo de força, sorte e prosperidade.",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    palco: "Palco Principal",
    organization: "Associação reconhecida como Ponto de Cultura desde 2001",
  },
  {
    id: 2,
    name: "Duo/Trio Gao Shan Liu Shui",
    type: "Música Tradicional Chinesa",
    description: "Grupo musical com 13 anos de história apresentando música tradicional chinesa com cítara, percussão e instrumentos de sopro tradicionais.",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    palco: "Palco Principal",
    organization: "Com Tony Lee, Nelson Lin, Bruno Adhmann e Luiggia Myuki",
  },
  {
    id: 3,
    name: "Hua Xing Arts Group",
    type: "Dança Chinesa Oficial",
    description: "Única organização oficialmente reconhecida no Brasil e América Latina para representar a Hua Xing Art Troupe de Pequim.",
    image: "/placeholder.svg?height=300&width=400",
    featured: true,
    palco: "Palco Principal",
    organization: "Licenciada pelo Overseas Chinese Affairs Office da China",
  },
  {
    id: 4,
    name: "DJ Gui Bendinskas",
    type: "Música Eletrônica",
    description: "DJ brasileiro formado pelo Senac Campinas, especializado em House Music com apresentação especial de músicas chinesas.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Saguão",
    organization: "Atuante em clubes como Caos Campinas e Ferra Jockey SP",
  },
  {
    id: 5,
    name: "Instituto Confúcio (Unicamp)",
    type: "Atividades Culturais",
    description: "Dança das Sombrinhas inspirada no poema 'Chuva Feliz numa Noite de Primavera' e oficinas de escrita chinesa.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Palco Principal / Oficinas",
    organization: "Atividades culturais chinesas da Unicamp",
  },
  {
    id: 6,
    name: "Aurinha",
    type: "Arte Circense Tradicional",
    description: "Apresentação de contorcionismo e diabolô, práticas tradicionais chinesas com milhares de anos de história.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Palco Principal / Oficinas",
    organization: "Arte tradicional chinesa - Kong zhu e acrobacias",
  },
  {
    id: 7,
    name: "Cia Eclipse",
    type: "Dança Pop Chinesa (C-Pop)",
    description: "Espetáculo 'Flow e Flava' com fusão entre culturas brasileira e chinesa, explorando músicas e elementos característicos.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Palco Principal",
    organization: "Companhia Eclipse Cultura e Arte",
  },
  {
    id: 8,
    name: "Brincadeiras Poéticas",
    type: "Atividade Infantil",
    description: "Trio Carolina Peixoto, Dhara e Thiago Peixoto com brincadeiras de roda, poesias autorais e cantigas populares.",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    palco: "Espaço Infantil",
    organization: "Atividade interativa para crianças e famílias",
  },
]

export default function Attractions() {

  return (
    <section id="attractions" className="section-padding bg-[var(--festival-green-dark)] relative overflow-hidden">      
      <div className="container relative z-10">
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
            <span className="font-normal">ATRAÇÕES </span>
            <span className="font-bold">2025</span>
          </motion.h2>
          <p className="text-content text-lg max-w-2xl mx-auto mb-6">
            Descubra os artistas e as atividades que farão parte desta edição especial do Festival da Lua, celebrando a
            sustentabilidade através da arte e música.
          </p>

        </motion.div>

        {/* Atrações Principais */}
        {attractions.filter((attraction) => attraction.featured).length > 0 && (
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

                  {/* Ícone decorativo */}
                  <div className="absolute top-4 right-4 opacity-10">
                    {attraction.type && attraction.type.includes('Dança') && (
                      <Users className="w-12 h-12 text-orange" />
                    )}
                    {attraction.type && attraction.type.includes('Música') && (
                      <Music className="w-12 h-12 text-green-light" />
                    )}
                    {attraction.type && attraction.type.includes('Arte') && (
                      <Palette className="w-12 h-12 text-orange" />
                    )}
                    {attraction.type && attraction.type.includes('Cultural') && (
                      <Globe className="w-12 h-12 text-green-light" />
                    )}
                    {(!attraction.type || (!attraction.type.includes('Dança') && !attraction.type.includes('Música') && !attraction.type.includes('Arte') && !attraction.type.includes('Cultural'))) && (
                      <Sparkles className="w-12 h-12 text-orange" />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-xl">
                        {attraction.type && attraction.type.includes('Dança') && (
                          <Users className="w-6 h-6 text-green-600" />
                        )}
                        {attraction.type && attraction.type.includes('Música') && (
                          <Music className="w-6 h-6 text-green-600" />
                        )}
                        {attraction.type && attraction.type.includes('Arte') && (
                          <Palette className="w-6 h-6 text-green-600" />
                        )}
                        {attraction.type && attraction.type.includes('Cultural') && (
                          <Globe className="w-6 h-6 text-green-600" />
                        )}
                        {(!attraction.type || (!attraction.type.includes('Dança') && !attraction.type.includes('Música') && !attraction.type.includes('Arte') && !attraction.type.includes('Cultural'))) && (
                          <Sparkles className="w-6 h-6 text-green-600" />
                        )}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-green-600">{attraction.type}</span>
                        <h4 className="text-xl font-semibold text-gray-800">{attraction.name || 'Nome não disponível'}</h4>
                      </div>
                    </div>

                    <p className="text-content mb-4 leading-relaxed">{attraction.description || 'Descrição não disponível'}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-600">{attraction.palco || 'Local não definido'}</span>
                    </div>

                    {attraction.organization && (
                      <div className="mt-3 text-xs text-gray-600 italic">
                        <p>{attraction.organization}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
                ))}
            </div>
          </motion.div>
        )}

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
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-green-100 rounded-xl">
                        {attraction.type && attraction.type.includes('Dança') && (
                          <Users className="w-5 h-5 text-green-600" />
                        )}
                        {attraction.type && attraction.type.includes('Música') && (
                          <Music className="w-5 h-5 text-green-600" />
                        )}
                        {attraction.type && attraction.type.includes('Arte') && (
                          <Palette className="w-5 h-5 text-green-600" />
                        )}
                        {attraction.type && attraction.type.includes('Cultural') && (
                          <Globe className="w-5 h-5 text-green-600" />
                        )}
                        {(!attraction.type || (!attraction.type.includes('Dança') && !attraction.type.includes('Música') && !attraction.type.includes('Arte') && !attraction.type.includes('Cultural'))) && (
                          <Sparkles className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-green-600">{attraction.type}</span>
                        <h4 className="font-semibold text-gray-800">{attraction.name || 'Nome não disponível'}</h4>
                      </div>
                    </div>

                    <p className="text-sm text-content mb-3 leading-relaxed">{attraction.description || 'Descrição não disponível'}</p>

                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-green-600">{attraction.palco || 'Local não definido'}</span>
                    </div>

                    {attraction.organization && (
                      <p className="text-xs text-gray-600 mt-2 italic">
                        {attraction.organization}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
