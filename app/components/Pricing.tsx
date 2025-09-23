'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    price: 999,
    features: [
      'Initial consultation',
      'Space planning',
      'Color scheme selection',
      'Shopping list',
    ],
  },
  {
    name: 'Standard',
    price: 1999,
    features: [
      'All Basic features',
      'Furniture layout',
      '3D rendering',
      'Project management',
    ],
  },
  {
    name: 'Premium',
    price: 3999,
    features: [
      'All Standard features',
      'Custom furniture design',
      'Material sourcing',
      'Full-scale renovation management',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--moon-yellow)] text-center mb-8 tracking-wide"
        >
          <span className="font-normal">OUR PRICING </span>
          <span className="font-bold">PLANS</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--cream)] rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--charcoal)]">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6 text-[var(--earth)]">${plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2 text-[var(--wood)]">
                    <Check className="text-[var(--earth)] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn btn-primary"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
