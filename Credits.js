const Credits = () => {
  return (
    <div className="absolute bottom-4 right-4 text-xs text-gray-400 hover:text-gray-600 transition-colors">
      <div>
        <span>Página no hecha por </span>
        <a
          href="https://instagram.com/el_wawin_"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-pink-500"
        >
          @el_wawin_
        </a>
      </div>
      <div>
        <span>Página hecha por </span>
        <a
          href="https://instagram.com/guercx_vaz"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500"
        >
          Fidel🗣️
        </a>
      </div>
    </div>
  );
};

export default Credits;
