"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = ["Todas", "2022", "2023", "2024"]

const mediaItems = [
  {
    id: 1,
    year: "2022",
    type: "photo",
    image: "/placeholder.svg?height=300&width=400",
    title: "Apresentação Musical - 1ª Edição",
  },
  {
    id: 2,
    year: "2023",
    type: "photo",
    image: "/placeholder.svg?height=300&width=400",
    title: "Decoração Coelho de Jade - 2ª Edição",
  },
  {
    id: 3,
    year: "2024",
    type: "video",
    videoId: "dQw4w9WgXcQ",
    image: "/placeholder.svg?height=300&width=400",
    title: "Highlights Palco Principal - 3ª Edição",
  },
  {
    id: 4,
    year: "2022",
    type: "photo",
    image: "/placeholder.svg?height=300&width=400",
    title: "Público sob a Lua Cheia - 1ª Edição",
  },
  {
    id: 5,
    year: "2023",
    type: "video",
    videoId: "dQw4w9WgXcQ",
    image: "/placeholder.svg?height=300&width=400",
    title: "Dança Tradicional Chinesa - 2ª Edição",
  },
  {
    id: 6,
    year: "2024",
    type: "photo",
    image: "/placeholder.svg?height=300&width=400",
    title: "Bolinhos da Lua Tradicionais - 3ª Edição",
  },
  {
    id: 7,
    year: "2023",
    type: "photo",
    image: "/placeholder.svg?height=300&width=400",
    title: "Lanternas Coloridas - 2ª Edição",
  },
  {
    id: 8,
    year: "2024",
    type: "video",
    videoId: "dQw4w9WgXcQ",
    image: "/placeholder.svg?height=300&width=400",
    title: "Show de Encerramento - 3ª Edição",
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todas")

  const filteredItems =
    activeCategory === "Todas" ? mediaItems : mediaItems.filter((item) => item.year === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-amber-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--moon-yellow)] text-center mb-8 tracking-wide"
        >
          <span className="font-normal">GALERIA - EDIÇÕES </span>
          <span className="font-bold">ANTERIORES</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-content mb-8 max-w-2xl mx-auto"
        >
          Reviva os momentos mágicos das edições anteriores do Festival da Lua através de nossa curadoria especial de
          fotos e vídeos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12 flex-wrap gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-medium mb-1 text-white">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-yellow-300">{item.year}</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                      {item.type === "video" ? "Vídeo" : "Foto"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
