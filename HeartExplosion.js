const HeartExplosion = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-500 text-3xl"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) scale(0)`,
            animation: `heartExplosion ${Math.random() * 2 + 1}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartExplosion;
