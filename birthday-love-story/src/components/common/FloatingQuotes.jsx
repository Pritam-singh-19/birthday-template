import { motion } from 'framer-motion'

const quotes = [
  'You made me better ❤️',
  'You became my peace 🌙',
  'You changed my world ✨',
  'You became home 🏡',
]

const FloatingQuotes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {quotes.map((quote, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-100/30 text-lg md:text-xl font-light"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0,
          }}
          animate={{
            y: -200,
            opacity: [0, 0.5, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: i * 3,
            ease: 'linear',
          }}
        >
          {quote}
        </motion.div>
      ))}

    </div>
  )
}

export default FloatingQuotes