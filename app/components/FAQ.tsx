'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What services does Luxor offer?',
    answer: 'Luxor offers a wide range of interior design services including space planning, color consultation, furniture selection, and full-scale renovations for both residential and commercial spaces.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'The duration of a project varies depending on its scope. A simple room redesign might take 4-6 weeks, while a full home renovation could take several months. We\'ll provide a detailed timeline during our initial consultation.'
  },
  {
    question: 'Do you work with a client\'s existing furniture?',
    answer: 'We\'re happy to incorporate your existing pieces into the new design. We\'ll assess your current furniture and suggest ways to repurpose or reupholster items to fit the new aesthetic.'
  },
  {
    question: 'What is your design process?',
    answer: 'Our design process begins with an initial consultation, followed by concept development, design presentation, revision, implementation, and final reveal. We keep our clients involved throughout the process to ensure their vision is realized.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-[var(--cream)]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full p-4 bg-white rounded-lg shadow-md focus:outline-none hover:bg-[var(--sand)] transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[var(--charcoal)]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[var(--earth)]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[var(--earth)]" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 bg-white rounded-lg shadow-md"
                  >
                    <p className="text-[var(--wood)]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
