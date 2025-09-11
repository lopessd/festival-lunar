"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/festivaldlua",
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/festivaldlua",
      color: "hover:text-blue-600",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/festivaldlua",
      color: "hover:text-red-500",
    },
    {
      name: "TikTok",
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z" />
        </svg>
      ),
      url: "https://tiktok.com/@festivaldlua",
      color: "hover:text-black",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Elementos decorativos da seção */}
      <div className="absolute top-10 left-8 opacity-15">
        <img src="/arvore_flores.png" alt="" className="w-16 h-16 decorative-float" />
      </div>
      <div className="absolute bottom-16 right-12 opacity-20">
        <img src="/coelho.png" alt="" className="w-12 h-12 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}} />
      </div>
      <div className="absolute top-1/2 left-4 opacity-10">
        <img src="/lua.png" alt="" className="w-10 h-10 decorative-soft-pulse" />
      </div>
      
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Contato & Redes Sociais
        </motion.h2>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-light mb-4 text-[var(--forest)]">Siga o Festival da Lua</h3>
            <p className="text-content text-lg mb-8 max-w-2xl mx-auto">
              Acompanhe todas as novidades, bastidores e momentos especiais do festival através das nossas redes sociais
              oficiais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex flex-col items-center p-6 rounded-lg bg-[var(--cream)] transition-all duration-300 ${social.color} hover:shadow-lg group relative`}
              >
                {/* Elementos decorativos sutis nos botões sociais */}
                {index === 0 && (
                  <div className="absolute -top-1 -right-1 opacity-15">
                    <img src="/coelho.png" alt="" className="w-4 h-4 animate-pulse" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute -bottom-1 -left-1 opacity-20">
                    <img src="/arvore_flores.png" alt="" className="w-4 h-4 decorative-soft-pulse" />
                  </div>
                )}
                <social.icon className="w-8 h-8 mb-3 text-[var(--forest)] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium text-[var(--charcoal)]">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white"
          >
            <h4 className="text-xl font-semibold mb-4 text-white">Fique por dentro de tudo!</h4>
            <p className="text-green-50 mb-6">
              Não perca nenhuma novidade sobre artistas, programação, ingressos e muito mais. Siga nossas redes sociais
              e seja o primeiro a saber de todas as atualizações do Festival da Lua 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={`footer-${social.name}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
