"use client"

import { motion } from "framer-motion"
import { Eye, Book, Gamepad2, TreePine, Camera, Palette } from "lucide-react"

const exhibitions = [
  {
    id: 1,
    name: "Espaço Livro CPFL",
    type: "Literatura Bilíngue",
    title: "Quando uma jacaré encontra um panda!",
    description: "Livro inteiramente bilíngue (Português/Mandarim) que mistura poesia, humor e crítica social. Escrito por Fang Suzhen e ilustrado por Zhang Qianhua.",
    details: "Uma delicada reflexão sobre empatia, respeito e os impactos do ser humano na vida selvagem. Traduzido por Sara Hong Zha.",
    location: "Espaço Literário",
    icon: Book,
    featured: true,
    publisher: "Editora Brasileira de Arte e Cultura"
  },
  {
    id: 2,
    name: "Exposição Tátil",
    type: "Acessibilidade Cultural",
    title: "Voando por Narrativas Invisíveis",
    description: "Reprodução de esculturas e monumentos por meio da fabricação digital, utilizando impressão 3D, captação com drones e audiodescrição.",
    details: "20 réplicas do patrimônio material nacional, incluindo 10 peças emblemáticas da cultura chinesa. Recursos de acessibilidade para pessoas cegas ou com baixa visão.",
    location: "Galeria Tátil",
    icon: Eye,
    featured: true,
    award: "Selo Municipal de Direitos Humanos e Diversidade (SP, 2020)"
  },
  {
    id: 3,
    name: "Fabriquinha de Brinquedos Inclusivos",
    type: "Atividade Lúdica",
    title: "Diversão Gigante Jogos",
    description: "Universo lúdico com recreação, brinquedos sensoriais e tabuleiros gigantes. Oficina de confecção de jogo da velha inclusivo por inscrição.",
    details: "Acervo especial de jogos inclusivos, brinquedos sensoriais e experiências que mostram como brincar pode ser para todos.",
    location: "Espaço Infantil",
    icon: Gamepad2,
    featured: false,
    instructors: "Pry Ribeiro e Maiara Miato"
  },
  {
    id: 4,
    name: "Simulador de Asa Delta",
    type: "Experiência Virtual",
    title: "TechnoMotion",
    description: "Simulador virtual de asa delta para uma experiência imersiva de voo. Tecnologia de ponta em simulação virtual.",
    details: "Especialistas em simuladores virtuais e soluções tecnológicas personalizadas oferecem uma experiência única de voo virtual.",
    location: "Área Tecnológica", 
    icon: Camera,
    featured: false,
    company: "TechnoMotion"
  },
  {
    id: 5,
    name: "Árvore das ODS",
    type: "Sustentabilidade",
    title: "Objetivos de Desenvolvimento Sustentável",
    description: "Instalação interativa que apresenta os 17 Objetivos de Desenvolvimento Sustentável da ONU de forma lúdica e educativa.",
    details: "Ativação permanente durante todo o festival que conecta as atividades culturais com a consciência ambiental e social.",
    location: "Entrada Principal",
    icon: TreePine,
    featured: false,
    organization: "ONU - Objetivos de Desenvolvimento Sustentável"
  }
]

const services = [
  {
    id: 1,
    name: "Pintura Facial",
    description: "Pinturas faciais artísticas com motivos orientais e da natureza",
    provider: "Bluer Berry Festas",
    location: "Área de Serviços",
    type: "Serviço"
  },
  {
    id: 2, 
    name: "Cabine de Fotos",
    description: "Estúdio de fotos temático para registrar momentos especiais do festival",
    provider: "Serviço de Fotografia",
    location: "Área de Serviços", 
    type: "Serviço"
  }
]

export default function Exhibitions() {
  return (
    <section
      id="exhibitions"
      className="section-padding bg-gradient-to-br from-[var(--light-green)] to-[var(--nature-green)] relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-16 left-4 opacity-15">
        <img src="/lua.png" alt="" className="w-16 h-16 animate-pulse" style={{animationDuration: '5s'}} />
      </div>
      <div className="absolute bottom-20 right-8 opacity-20">
        <img src="/arvore_flores.png" alt="" className="w-18 h-18 animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}} />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-[var(--dark-green)]">Exposições e Ativações</h2>
          <p className="text-[var(--forest-green)] text-lg max-w-3xl mx-auto mb-6">
            Explore exposições interativas, espaços culturais e ativações especiais que complementam 
            a experiência do Festival da Lua com arte, tecnologia e consciência social.
          </p>
        </motion.div>

        {/* Exposições em Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--dark-green)] mb-8 text-center">Destaques Especiais</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {exhibitions
              .filter((exhibition) => exhibition.featured)
              .map((exhibition, index) => (
                <motion.div
                  key={exhibition.id}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                >
                  {/* Ícone decorativo */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <exhibition.icon className="w-12 h-12 text-[var(--nature-green)]" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 rounded-xl">
                        <exhibition.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-green-600">{exhibition.type}</span>
                        <h4 className="text-xl font-semibold text-gray-800">{exhibition.name}</h4>
                      </div>
                    </div>

                    {exhibition.title && (
                      <h5 className="text-lg font-medium text-[var(--forest-green)] mb-3 italic">
                        "{exhibition.title}"
                      </h5>
                    )}

                    <p className="text-content mb-4 leading-relaxed">{exhibition.description}</p>
                    <p className="text-sm text-[var(--forest-green)] mb-4 leading-relaxed">{exhibition.details}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--nature-green)]">{exhibition.location}</span>
                      {exhibition.award && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                          Premiado
                        </span>
                      )}
                    </div>

                    {(exhibition.publisher || exhibition.award) && (
                      <div className="mt-3 text-xs text-[var(--forest-green)] italic">
                        {exhibition.publisher && <p>{exhibition.publisher}</p>}
                        {exhibition.award && <p>{exhibition.award}</p>}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Outras Ativações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--dark-green)] mb-8 text-center">Outras Ativações</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exhibitions
              .filter((exhibition) => !exhibition.featured)
              .map((exhibition, index) => (
                <motion.div
                  key={exhibition.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green-100 rounded-xl">
                      <exhibition.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-green-600">{exhibition.type}</span>
                      <h4 className="font-semibold text-gray-800">{exhibition.name}</h4>
                    </div>
                  </div>

                  {exhibition.title && (
                    <h5 className="text-sm font-medium text-[var(--forest-green)] mb-2 italic">
                      {exhibition.title}
                    </h5>
                  )}

                  <p className="text-sm text-content mb-3 leading-relaxed">{exhibition.description}</p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-green-600">{exhibition.location}</span>
                  </div>

                  {(exhibition.instructors || exhibition.company || exhibition.organization) && (
                    <p className="text-xs text-[var(--forest-green)] mt-2 italic">
                      {exhibition.instructors || exhibition.company || exhibition.organization}
                    </p>
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Serviços Disponíveis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[var(--dark-green)] mb-6 text-center">Serviços Disponíveis</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[var(--nature-green)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-[var(--nature-green)]" />
                  <div>
                    <h4 className="font-semibold text-[var(--dark-green)]">{service.name}</h4>
                    <span className="text-sm text-[var(--forest-green)]">{service.provider}</span>
                  </div>
                </div>
                <p className="text-sm text-content mb-2">{service.description}</p>
                <span className="text-xs font-medium text-[var(--nature-green)]">{service.location}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Informação especial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-[var(--dark-green)] bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">Experiência Completa</h3>
            <p className="text-white text-sm leading-relaxed">
              Todas as exposições e ativações estarão disponíveis durante os dois dias do festival. 
              Aproveite para explorar cada espaço e vivenciar uma jornada cultural única que conecta 
              tradição, tecnologia e consciência social.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}