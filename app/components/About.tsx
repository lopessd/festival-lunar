"use client"

import { motion } from "framer-motion"

export default function About() {

  return (
    <section id="about" className="section-padding bg-[var(--festival-green-dark)] relative overflow-hidden">      
      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--moon-yellow)] text-center mb-8 tracking-wide"
        >
          <span className="font-normal">SOBRE O </span>
          <span className="font-bold">FESTIVAL DA LUA</span>
        </motion.h2>
        <div className="flex flex-wrap items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 mb-4 md:mb-0 relative"
          >
            <div className="relative bg-gradient-to-br from-green-light/20 to-orange/10 rounded-lg p-4 sm:p-6">
              <img
                src="/imagem_sustenbtabilidade.png"
                alt="Sustentabilidade Ambiental - Festival da Lua 2025"
                className="w-full h-auto mx-auto drop-shadow-lg scale-105"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2 md:pl-4 lg:pl-6"
          >
            <div className="text-content text-sm sm:text-lg mb-6">
              <p className="mb-4">
                O Festival da Lua, que também é conhecido como Festival de Meio do Outono, é uma
                celebração popular na Ásia para comemorar a abundância na agricultura e a união da
                família. A data festiva é comemorada há mais de 3.000 anos.
              </p>

              <p className="mb-4">
                O Festival da Lua acontece no 15º dia do 8º mês lunar do calendário chinês, que
                coincide com o equinócio de outono do calendário solar. Esse é o momento ideal,
                quando a lua está cheia e em seu maior esplendor, para agradecer a colheita do inverno
                e pedir por fartura no verão. É daí que vem o nome de Festival de Meio de Outono, uma
                relação com a cultura agrícola do país.
              </p>

              <p className="mb-6">
                Atualmente a data é um feriado nacional onde os chineses passam o dia com a família,
                fazem uma refeição juntos, pedem por boa sorte e trocam bolinhos da lua como
                presentes.
              </p>

              <p className="mb-4">
                中秋节
              </p>

              <p className="mb-4">
                中秋节，又称"月亮节"，在亚洲是一种庆祝农业丰收与家庭团圆的传统节日。这个节日已有三
                千多年的历史。
              </p>

              <p className="mb-4">
                中秋节在农历八月十五日举行，这一天恰逢公历秋分前后。此时正值满月、月色最美，人们借此
                感谢秋收，并祈求来年丰收，因此得名"中秋节"。
              </p>

              <p>
                如今，中秋节是中国的法定节日。人们与家人团聚，共进晚餐，祈福纳祥，并以月饼作为馈赠。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
