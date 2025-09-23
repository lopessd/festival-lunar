"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--moon-yellow)] text-center mb-8 tracking-wide"
        >
          <span className="font-normal">NOSSOS </span>
          <span className="font-bold">PARCEIROS</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-content text-lg max-w-3xl mx-auto">
              Agradecemos a todos os parceiros que tornam o Festival da Lua possível,
              contribuindo para celebrar a sustentabilidade ambiental através da cultura.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Carrossel infinito */}
            <div className="overflow-hidden rounded-xl shadow-lg bg-[var(--festival-green-light)] p-8">
              <div className="flex animate-scroll">
                {/* Primeira instância */}
                <div className="flex-shrink-0">
                  <img
                    src="/regua-assinatura.png.png"
                    alt="Parceiros do Festival da Lua"
                    className="h-32 md:h-48 lg:h-56 w-auto object-contain"
                  />
                </div>
                {/* Segunda instância para continuidade */}
                <div className="flex-shrink-0 ml-8">
                  <img
                    src="/regua-assinatura.png.png"
                    alt="Parceiros do Festival da Lua"
                    className="h-32 md:h-48 lg:h-56 w-auto object-contain"
                  />
                </div>
                {/* Terceira instância para mobile */}
                <div className="flex-shrink-0 ml-8">
                  <img
                    src="/regua-assinatura.png.png"
                    alt="Parceiros do Festival da Lua"
                    className="h-32 md:h-48 lg:h-56 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-600">
              Quer ser nosso parceiro? Entre em contato conosco e faça parte desta celebração da natureza e cultura.
            </p>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 15s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}
