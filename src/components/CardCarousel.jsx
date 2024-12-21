"use client"
import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import ModernCreditCard from "./ModernCreditCard"

const CardCarousel = ({ cards }) => {
  const carouselRef = useRef(null)
  const controls = useAnimation()

  useEffect(() => {
    const scrollWidth = carouselRef.current?.scrollWidth || 0
    const viewportWidth = carouselRef.current?.offsetWidth || 0

    const scroll = async () => {
      await controls.start({
        x: [0, -scrollWidth + viewportWidth],
        transition: { duration: 20, ease: "linear" }
      })
      await controls.start({
        x: 0,
        transition: { duration: 0 }
      })
      scroll()
    }

    scroll()
  }, [controls])

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <motion.div className="flex space-x-4" animate={controls}>
        {cards.map(card => (
          <ModernCreditCard key={card.id} {...card} />
        ))}
      </motion.div>
    </div>
  )
}

export default CardCarousel
