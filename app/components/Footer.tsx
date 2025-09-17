'use client'

export default function Footer() {
  return (
    <footer className="bg-[var(--festival-green-dark)] text-white py-8 border-t border-[var(--festival-green-light)] border-opacity-20">
      <div className="container text-center">
        <div className="mb-4">
          <h3 className="text-xl font-light text-[var(--festival-orange)] mb-2">Festival da Lua 2025</h3>
          <p className="text-[var(--festival-green-light)] text-sm">
            Celebrando a sustentabilidade ambiental através da música, arte e cultura.
          </p>
        </div>

        <div className="border-t border-[var(--festival-green-light)] border-opacity-20 pt-4">
          <p className="text-[var(--festival-green-light)] text-sm">
            &copy; {new Date().getFullYear()} Festival da Lua. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
