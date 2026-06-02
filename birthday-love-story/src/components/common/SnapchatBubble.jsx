import { motion } from 'framer-motion'

const SnapchatBubble = ({
  side,
  text,
  delay,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === 'left' ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.8,
      }}
      className={`flex ${
        side === 'left'
          ? 'justify-start'
          : 'justify-end'
      }`}
    >
      <div
        className={`
          max-w-[70%]
          px-5
          py-4
          rounded-3xl
          text-lg
          shadow-xl
          ${
            side === 'left'
              ? 'bg-white text-black'
              : 'bg-[#FFFC00] text-black'
          }
        `}
      >
        {text}
      </div>
    </motion.div>
  )
}

export default SnapchatBubble