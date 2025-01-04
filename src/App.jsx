import React, { useState } from "react";
import Watch from "./watch"; // Import Watch component
import Samurai from "./samurai.jsx";
const App = () => {
  const [imagesrc, setimagesrc] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isWatchPage, setIsWatchPage] = useState(false); // State to control rendering Watch page
  const [issampage, setIsSam] = useState(false); // State to control rendering Watch page

  const handleMouseOver = (src, event) => {
    setimagesrc(src);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseOut = () => {
    setimagesrc("");
  };

  const handleListItemClick = () => {
    setIsWatchPage(true); // Set to true to render Watch component
  };

  const bega = () => {
    setIsSam(true);
  };

  // If isWatchPage is true, render the Watch page, otherwise render the home page
  if (isWatchPage) {
    return <Watch />;
  }
  if (issampage) {
    return <Samurai />;
  }
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen w-screen"
      style={{
        backgroundImage:
          "url('https://images3.alphacoders.com/118/1185634.jpg')",
      }}
    >
      <ul className="justify-center flex h-screen items-center">
        <li
          className="text-3xl font-mono hover:bg-orange-50 hover:text-black font-extrabold bg-red-300 w-screen"
          onMouseOver={(e) =>
            handleMouseOver(
              "https://avatarfiles.alphacoders.com/375/thumb-1920-375809.png",
              e,
            )
          }
          onMouseOut={handleMouseOut}
          onClick={handleListItemClick} // Handle click to navigate to Watch page
        >
          BATMAN
        </li>
        <li
          className="text-3xl font-mono hover:bg-orange-50 hover:text-black font-extrabold bg-violet-200 w-screen"
          onMouseOver={(e) =>
            handleMouseOver(
              "https://i.pinimg.com/736x/88/cd/f5/88cdf541fc36914021e27632afdd6a3e.jpg",
              e,
            )
          }
          onMouseOut={handleMouseOut}
          onClick={bega} // Handle click to navigate to Watch page
        >
          SAMURAI BATMAN
        </li>
        <li
          className="text-3xl font-mono font-extrabold bg-green-300 w-screen hover:bg-orange-50 hover:text-black"
          onMouseOver={(e) =>
            handleMouseOver(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxYcLJmR4Me5IXIinEr_lL7sZDMt6c6jCTvQ&s",
              e,
            )
          }
          onMouseOut={handleMouseOut}
          onClick={handleListItemClick} // Handle click to navigate to Watch page
        >
          SMILE!!!!HA HA HA
        </li>
      </ul>

      {imagesrc && (
        <img
          src={imagesrc}
          alt="Hovered"
          className="w-52 opacity-75 transform transition-all duration-300 p-2"
          style={{
            top: `${position.y - 20}px`,
            left: `${position.x + 10}px`,
            pointerEvents: "none",
            position: "absolute",
          }}
        />
      )}
    </div>
  );
};

export default App;
