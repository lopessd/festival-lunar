"use client"

import { motion } from "framer-motion"
import { Clock, Users, Star, MapPin } from "lucide-react"

const workshops = [
  {
    id: 1,
    name: "Nó Chinês",
    instructor: "Ana Chinchila e Gabriel Cavalcante",
    duration: "1h30",
    description: "Explore a arte milenar do nó chinês nesta oficina prática. Aprenda as técnicas básicas para criar nós decorativos, trabalhando com diferentes tipos de cordas e materiais.",
    materials: "Cordas e materiais fornecidos",
    takeHome: "Sua própria criação de nó chinês",
    featured: true,
    category: "Artesanato"
  },
  {
    id: 2,
    name: "Lanterna Chinesa",
    instructor: "Ana Chinchila e Gabriel Cavalcante", 
    duration: "1h30",
    description: "Solte a criatividade na oficina de lanterna chinesa. Aprenda a confeccionar lanternas tradicionais usando técnicas artesanais e materiais acessíveis.",
    materials: "Papel, bambu e materiais decorativos",
    takeHome: "Sua lanterna personalizada",
    featured: true,
    category: "Artesanato"
  },
  {
    id: 3,
    name: "Cerimônia do Chá Chinesa (茶道)",
    instructor: "Prof. Ronaldo Fogueral - Espaço Shaolin de Botucatu",
    duration: "2h",
    description: "Mais do que preparar uma bebida, é uma meditação em movimento. Uma imersão sensorial única na arte milenar Gongfu Cha que cultiva presença, elegância e conexão.",
    materials: "Chá Oolong e utensílios tradicionais",
    takeHome: "Conhecimento sobre o Caminho do Chá",
    featured: true,
    category: "Cultura"
  },
  {
    id: 4,
    name: "Origami e Corte de Papel Chinês",
    instructor: "Nina Pupo e Marcelo Alves",
    duration: "1h30",
    description: "Descubra a arte tradicional milenar do papel cortado e a arte chinesa da dobradura. Transforme um simples papel em belas figuras decorativas em 3D.",
    materials: "Papel especial e tesouras",
    takeHome: "Suas criações em origami e papel cortado",
    featured: false,
    category: "Artesanato"
  },
  {
    id: 5,
    name: "Escrita Chinesa (Caligrafia)",
    instructor: "Instituto Confúcio (Unicamp)",
    duration: "1h30", 
    description: "A caligrafia chinesa é uma arte singular que utiliza os caracteres como forma de expressão, unindo técnica, estrutura e composição por meio de pincel e tinta.",
    materials: "Pincéis, tinta e papel especial",
    takeHome: "Seus próprios caracteres chineses",
    featured: false,
    category: "Cultura"
  },
  {
    id: 6,
    name: "Padronagem Chinesa",
    instructor: "Rose XX",
    duration: "1h30",
    description: "Aprenda as técnicas tradicionais chinesas de padronagem, explorando motivos e símbolos culturais milenares.",
    materials: "Papéis, tintas e carimbos",
    takeHome: "Padrões chineses criados por você",
    featured: false,
    category: "Arte"
  },
  {
    id: 7,
    name: "Vivências de Diabolô e Prato",
    instructor: "Aurinha",
    duration: "1h30",
    description: "Aprenda a arte tradicional chinesa do diabolô (kong zhu) e prato. Uma prática com cerca de mil anos de história que surgiu como passatempo da nobreza.",
    materials: "Diabolôs e pratos fornecidos",
    takeHome: "Técnicas e movimentos básicos",
    featured: false,
    category: "Movimento"
  },
  {
    id: 8,
    name: "Drone Lab",
    instructor: "Carlos Candido",
    duration: "2h",
    description: "Conheça os detalhes dessa tecnologia moderna, montando pequenos drones em grupos e, ao final, podendo pilotar suas próprias criações.",
    materials: "Kits de montagem de drones",
    takeHome: "Conhecimento sobre tecnologia de drones",
    featured: false,
    category: "Tecnologia"
  },
  {
    id: 9,
    name: "Máscaras de Papel",
    instructor: "Pedro Elias e Elisa Suzuki",
    duration: "1h",
    description: "Oficina lúdica onde as crianças mergulham no universo da imaginação, criando máscaras coloridas com técnicas simples de recorte, colagem e montagem.",
    materials: "Papéis coloridos, cola e tesouras",
    takeHome: "Máscaras personalizadas",
    featured: false,
    category: "Infantil"
  }
]

const categories = [
  { name: "Todas", value: "all" },
  { name: "Artesanato", value: "Artesanato" },
  { name: "Cultura", value: "Cultura" },
  { name: "Arte", value: "Arte" },
  { name: "Movimento", value: "Movimento" },
  { name: "Tecnologia", value: "Tecnologia" },
  { name: "Infantil", value: "Infantil" },
]

export default function Workshops() {
  return (
    <section
      id="workshops"
      className="section-padding bg-gradient-to-br from-[var(--festival-green-dark)] to-[var(--nature-green)] relative overflow-hidden"
    >
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
            <span className="font-normal">OFICINAS </span>
            <span className="font-bold">CULTURAIS</span>
          </motion.h2>
          <p className="text-white text-lg max-w-2xl mx-auto opacity-90 mb-6">
            Participe de oficinas práticas e imersivas que conectam você com a rica tradição cultural chinesa. 
            Todas as atividades são gratuitas e incluem materiais.
          </p>
          
          {/* Lua decorativa */}
          <div className="absolute left-0 top-0 hidden lg:block opacity-20">
            <img
              src="/lua.png"
              alt="Lua decorativa"
              className="w-16 h-16 xl:w-20 xl:h-20 object-contain"
            />
          </div>
        </motion.div>

        {/* Filtros por categoria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              className="px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-[var(--nature-green)] transition-all duration-300 text-sm sm:text-base"
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Oficinas em Destaque */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg sm:text-2xl font-semibold text-[var(--moon-yellow)] mb-6 sm:mb-8 text-center flex items-center justify-center gap-2">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--moon-yellow)]" />
            Oficinas em Destaque
          </h3>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {workshops
              .filter((workshop) => workshop.featured)
              .map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
                >

                  
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[var(--nature-green)] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {workshop.category}
                      </span>
                      <div className="flex items-center gap-1 text-[var(--nature-green)] text-sm">
                        <Clock className="w-4 h-4" />
                        {workshop.duration}
                      </div>
                    </div>
                    
                    <h4 className="text-lg sm:text-xl font-semibold text-[var(--dark-green)] mb-2 sm:mb-3">{workshop.name}</h4>
                    <p className="text-[var(--forest-green)] text-sm font-medium mb-2">{workshop.instructor}</p>
                    <p className="text-content text-sm sm:text-base mb-3 leading-relaxed">{workshop.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-[var(--nature-green)]">Materiais: </span>
                        <span className="text-content">{workshop.materials}</span>
                      </div>
                      <div>
                        <span className="font-medium text-[var(--nature-green)]">Você leva: </span>
                        <span className="text-content">{workshop.takeHome}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Outras Oficinas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-2xl font-semibold text-[var(--moon-yellow)] mb-6 sm:mb-8 text-center">Outras Oficinas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {workshops
              .filter((workshop) => !workshop.featured)
              .map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-[var(--light-green)] text-[var(--dark-green)] px-2 py-1 rounded-full text-xs font-medium">
                        {workshop.category}
                      </span>
                      <div className="flex items-center gap-1 text-[var(--forest-green)] text-sm">
                        <Clock className="w-3 h-3" />
                        {workshop.duration}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-[var(--dark-green)] mb-2 text-base">{workshop.name}</h4>
                    <p className="text-[var(--forest-green)] text-sm font-medium mb-2">{workshop.instructor}</p>
                    <p className="text-content text-sm leading-relaxed mb-3">{workshop.description}</p>
                    
                    <div className="text-xs">
                      <div className="mb-1">
                        <span className="font-medium text-[var(--nature-green)]">Você leva: </span>
                        <span className="text-content">{workshop.takeHome}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Informações importantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-[var(--moon-yellow)] mb-2 sm:mb-3 flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Informações Importantes
            </h3>
            <div className="text-white opacity-90 text-sm sm:text-base space-y-2">
              <p>📝 <strong>Inscrições:</strong> Por ordem de chegada no dia do evento</p>
              <p>🎁 <strong>Materiais:</strong> Todos os materiais são fornecidos gratuitamente</p>
              <p>👥 <strong>Vagas:</strong> Limitadas por oficina - chegue cedo para garantir sua participação</p>
              <p>🏠 <strong>Leve para casa:</strong> Todas as criações feitas nas oficinas são suas!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
