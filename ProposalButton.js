const ProposalButton = ({ onClick, text, color, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-full text-white font-bold text-xl shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none ${color} ${className}`}
    >
      {text}
    </button>
  );
};

export default ProposalButton;
