const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-500 text-2xl animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '-50px',
            opacity: 0,
            animation: `float ${Math.random() * 6 + 4}s ease-in infinite`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        >
          {['❤️', '💖', '💘', '💝', '💗'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
