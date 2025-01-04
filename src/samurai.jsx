const Samurai = () => {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://m.media-amazon.com/images/M/MV5BMDNmOTNjY2YtY2YzMi00MjRmLTgwNjctMTg3ZGYyZTZmYmE5XkEyXkFqcGc@._V1_.jpg')",
      }}
    >
      <iframe
        className="bg-opacity-50 w-full h-full md:w-3/4 md:h-3/4 rounded-xl"
        src="https://vidsrc.in/embed/movie?imdb=tt7451284"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Samurai;
