const WishReveal = ({ onComplete }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">

      <h1 className="text-6xl text-white mb-10">
        Make A Wish ❤️
      </h1>

      <p className="text-white text-xl mb-12">
        Close your eyes...
        <br />
        Think about your wish...
      </p>

      <button
        onClick={onComplete}
        className="bg-pink-500 text-white px-10 py-4 rounded-full"
      >
        Blow Candles 🎂
      </button>

    </div>
  )
}

export default WishReveal