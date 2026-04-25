import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "5 признаков того, что вам нужен персональный стилист",
    category: "Советы",
    image: "https://cdn.poehali.dev/projects/1a7a5b03-978f-41cd-82c8-64d31f1fcdb9/files/bd3ea202-89bb-42f0-a47a-2cc2bbdedd82.jpg",
  },
  {
    title: "Как создать капсульный гардероб с нуля",
    category: "Гардероб",
    image: "https://cdn.poehali.dev/projects/1a7a5b03-978f-41cd-82c8-64d31f1fcdb9/files/7784e10c-ffb0-4373-9229-11d8265dc2bd.jpg",
  },
  {
    title: "Тренды стиля 2025: что носить и как адаптировать под себя",
    category: "Тренды",
    image: "https://cdn.poehali.dev/projects/1a7a5b03-978f-41cd-82c8-64d31f1fcdb9/files/2c085a7f-0de3-407d-86f9-f10a2ae398bb.jpg",
  },
  {
    title: "Шопинг без сожалений: секреты осознанного выбора одежды",
    category: "Шопинг",
    image: "https://cdn.poehali.dev/projects/1a7a5b03-978f-41cd-82c8-64d31f1fcdb9/files/7784e10c-ffb0-4373-9229-11d8265dc2bd.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Блог о стиле
        </motion.p>

        <div className="divide-y divide-border">
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href="#"
              className="group flex items-center justify-between py-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{article.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        {/* Floating hover image */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={articles[hoveredIndex].image || "/placeholder.svg"}
                alt={articles[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}