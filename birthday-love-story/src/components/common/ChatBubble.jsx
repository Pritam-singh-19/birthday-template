import { motion } from 'framer-motion'

const ChatBubble = ({ text, delay = 0, align = 'left' }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay,
      }}
      className={`max-w-sm px-5 py-4 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl ${
        align === 'right'
          ? 'ml-auto bg-pink-500/20'
          : 'bg-white/10'
      }`}
    >
      <p className="text-white text-lg">
        {text}
      </p>
    </motion.div>
  )
}

export default ChatBubble