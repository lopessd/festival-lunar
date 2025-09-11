"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, Users } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Festival da Lua 2025 anuncia tema Sustentabilidade Ambiental",
    date: "15 de Agosto, 2024",
    category: "Anúncio",
    excerpt:
      "Em sintonia com a COP30 que acontecerá em Belém, o festival abraça a causa ambiental como tema central desta edição.",
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
  },
  {
    id: 2,
    title: "Centro de Convivência passa por reforma para receber o festival",
    date: "10 de Agosto, 2024",
    category: "Infraestrutura",
    excerpt: "Espaço foi completamente renovado com foco em acessibilidade e sustentabilidade.",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 3,
    title: "Confirmadas as primeiras atrações do Festival da Lua 2025",
    date: "5 de Agosto, 2024",
    category: "Atrações",
    excerpt: "Banda Eco Ritmo e DJ Luna Verde estão entre os primeiros nomes confirmados.",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
  {
    id: 4,
    title: "Parceria com universidades locais para atividades educativas",
    date: "1 de Agosto, 2024",
    category: "Educação",
    excerpt: "Oficinas e palestras sobre sustentabilidade serão ministradas por especialistas.",
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
  },
]

const partners = [
  { name: "Prefeitura Municipal", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Universidade Verde", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Instituto Ambiental", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Energia Limpa SA", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Banco Sustentável", logo: "/placeholder.svg?height=60&width=120" },
  { name: "ONG EcoVida", logo: "/placeholder.svg?height=60&width=120" },
]

export default function News() {
  return (
    <section id="news" className="section-padding bg-gradient-to-br from-[var(--cream-white)] to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Notícias & Atualizações</h2>
          <p className="text-content text-lg max-w-2xl mx-auto">
            Fique por dentro das últimas novidades sobre o Festival da Lua 2025 e nossos parceiros.
          </p>
        </motion.div>

        {/* Notícia Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {news
            .filter((item) => item.featured)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-[var(--nature-green)] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1 text-[var(--forest-green)] text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--dark-green)] mb-4">{item.title}</h3>
                    <p className="text-content text-lg mb-6">{item.excerpt}</p>
                    <button className="flex items-center gap-2 text-[var(--nature-green)] hover:text-[var(--forest-green)] font-medium transition-colors">
                      Leia mais
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

        {/* Outras Notícias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-[var(--dark-green)] mb-8">Outras Notícias</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {news
              .filter((item) => !item.featured)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[var(--moon-yellow)] text-[var(--dark-green)] px-2 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-[var(--forest-green)] text-sm mb-3">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                    <h4 className="font-semibold text-[var(--dark-green)] mb-3 line-clamp-2">{item.title}</h4>
                    <p className="text-content text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                    <button className="text-[var(--nature-green)] hover:text-[var(--forest-green)] text-sm font-medium transition-colors">
                      Leia mais →
                    </button>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Parceiros e Apoiadores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-[var(--nature-green)]" />
              <h3 className="text-2xl font-semibold text-[var(--dark-green)]">Parceiros & Apoiadores</h3>
            </div>
            <p className="text-content">Agradecemos a todos os parceiros que tornam o Festival da Lua 2025 possível.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
