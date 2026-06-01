import { motion } from 'framer-motion'

const StorySequence = ({ lines }) => {
  return (
    <div className="space-y-6">
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            delay: index * 1.5,
          }}
          className="text-xl md:text-3xl font-light text-white/90 leading-relaxed"
        >
          {line}
        </motion.p>
      ))}
    </div>
  )
}

export default StorySequence