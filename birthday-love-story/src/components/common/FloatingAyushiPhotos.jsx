import { motion } from 'framer-motion'

import ayushi1 from '../../assets/images/ayushi/ayushi1.jpeg'
import ayushi2 from '../../assets/images/ayushi/ayushi2.jpeg'
import ayushi3 from '../../assets/images/ayushi/ayushi3.jpeg'
import ayushi4 from '../../assets/images/ayushi/ayushi4.jpeg'
import ayushi5 from '../../assets/images/ayushi/ayushi5.jpeg'
import ayushi6 from '../../assets/images/ayushi/ayushi6.jpeg'

const photos = [
  ayushi1,
  ayushi2,
  ayushi3,
  ayushi4,
  ayushi5,
  ayushi6,
]

const FloatingAyushiPhotos = () => {
  return (
    <>
      {photos.map((photo, index) => (

        <motion.img
          key={index}
          src={photo}
          alt=""
          className="
            absolute
            w-40
            md:w-52
            rounded-3xl
            shadow-2xl
            opacity-20
            blur-[0px]
            hover:opacity-80
            transition-all
            duration-700
            object-cover
          "
          initial={{
            y: 200,
            rotate: -10,
            opacity: 0,
          }}
          animate={{
            y: [-50, 50, -50],
            rotate: [-8, 8, -8],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12 + index * 2,
            repeat: Infinity,
          }}
          style={{
            left: `${10 + index * 15}%`,
            top: `${10 + (index % 3) * 25}%`,
          }}
        />

      ))}
    </>
  )
}

export default FloatingAyushiPhotos