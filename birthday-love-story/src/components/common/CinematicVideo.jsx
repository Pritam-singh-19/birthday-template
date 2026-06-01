const CinematicVideo = ({
  src,
  overlay = 'bg-black/50',
}) => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div
        className={`absolute inset-0 ${overlay}`}
      />
    </>
  )
}

export default CinematicVideo