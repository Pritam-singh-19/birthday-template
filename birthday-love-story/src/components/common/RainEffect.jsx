const RainEffect = () => {
  const drops = Array.from({ length: 120 })

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((_, i) => (
        <span
          key={i}
          className="absolute bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * -100}%`,
            width: '1px',
            height: `${Math.random() * 20 + 10}px`,
            animation: `rainFall ${
              Math.random() * 1 + 0.5
            }s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

export default RainEffect