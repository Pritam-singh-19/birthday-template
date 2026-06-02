import { motion } from 'framer-motion'

import eyes from '../assets/images/memories/eyes.jpeg'

import meet1 from '../assets/images/memories/meet1.jpeg'
import meet2 from '../assets/images/memories/meet2.jpeg'
import meet3 from '../assets/images/memories/meet3.jpeg'
import meet4 from '../assets/images/memories/meet4.jpeg'

import FloatingParticles from '../components/common/FloatingParticles'
import SnapchatBubble from '../components/common/SnapchatBubble'

const Scene3_Destiny = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0f0f] text-white py-40">

      {/* Snapchat Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFC00]/20 via-black to-black" />

      <FloatingParticles />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Title */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[12px] text-yellow-300">
            Snapchat Flashback
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black">
            15 December ❤️
          </h1>

          <p className="mt-10 text-xl text-gray-300">
            A normal evening.
            <br />
            A normal notification.
            <br />
            Or so I thought...
          </p>
        </motion.div>

        {/* Notification */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="
            mt-24
            max-w-md
            mx-auto
            bg-white
            rounded-3xl
            p-6
            text-black
            shadow-2xl
          "
        >
          <p className="text-sm text-gray-500">
            👻 Snapchat
          </p>

          <h3 className="font-bold text-xl mt-2">
            HAPPINESS✨🤍
          </h3>

          <p className="mt-2">
            sent you a message
          </p>
        </motion.div>

        {/* Story */}

        <motion.h2
          className="text-center text-4xl md:text-6xl mt-24 font-bold text-yellow-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          The Conversation
        </motion.h2>

        <div className="mt-20 space-y-8 max-w-3xl mx-auto">

          <SnapchatBubble
            side="right"
            text="Hii"
            delay={0.2}
          />

          <SnapchatBubble
            side="left"
            text="Hello 🙂"
            delay={0.4}
          />

          <SnapchatBubble
            side="right"
            text="I would like to be friends with you. Can we be friends?"
            delay={0.6}
          />

          <SnapchatBubble
            side="left"
            text="Yaa sure ❤️"
            delay={0.8}
          />

        </div>

        {/* Emotional Text */}

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold">

            And just like that...

          </h2>

          <p className="mt-8 text-xl text-gray-300">
            a story began.
          </p>
        </motion.div>

        {/* Eyes */}

        <motion.div
          className="mt-40 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-yellow-300">

            The Eyes 👀

          </h2>

          <p className="mt-8 text-xl text-gray-300">
            One day...
            <br />
            I asked her for a snap of her eyes.
          </p>

          <img
            src={eyes}
            alt=""
            className="
              mt-16
              mx-auto
              rounded-3xl
              w-[300px]
              shadow-[0_0_60px_rgba(255,252,0,0.5)]
            "
          />

          <p className="mt-10 text-2xl italic">
            And somehow...
            <br />
            I got lost in them.
          </p>
        </motion.div>

        {/* First Meeting */}

        <motion.div
          className="mt-48 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-6xl md:text-8xl font-black text-pink-300">
            22 February ❤️
          </h2>

          <p className="mt-8 text-2xl">
            For the first time...
            <br />
            the girl behind the screen
            <br />
            stood in front of me.
          </p>
        </motion.div>

        {/* Photos */}

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          <img
            src={meet1}
            className="rounded-3xl shadow-2xl"
          />

          <img
            src={meet2}
            className="rounded-3xl shadow-2xl"
          />

        </div>

        {/* Second Meeting */}

        <motion.div
          className="mt-48 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-6xl md:text-8xl font-black text-pink-300">
            24 February ❤️
          </h2>

          <p className="mt-8 text-2xl">
            One meeting wasn't enough.
          </p>

          <p className="mt-4 text-xl text-gray-300">
            So fate gave me another day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          <img
            src={meet3}
            className="rounded-3xl shadow-2xl"
          />

          <img
            src={meet4}
            className="rounded-3xl shadow-2xl"
          />

        </div>

        {/* Ending */}

        <motion.div
          className="mt-48 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-black">

            People say love stories
            begin with grand moments.

          </h2>

          <h3 className="mt-16 text-4xl md:text-6xl text-yellow-300">

            Mine began with a simple
            "Hii"

          </h3>

          <h3 className="mt-10 text-4xl md:text-6xl text-pink-300">

            And her beautiful
            "Hello"

          </h3>

        </motion.div>

      </div>
    </section>
  )
}

export default Scene3_Destiny