import React, { useState } from "react";
const App = () => {
  const [imagesrc, setimagesrc] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseOver = (src, event) => {
    setimagesrc(src);
    setPosition({ x: event.clientX, y: event.clientY });
  };
  const handleMouseOut = () => {
    setimagesrc("");
  };
  const check = () => {
    console.log("working");
  };
  return (
    <div>
      <h1 className="text-center text-blue-200 top-0 font-serif">
        Fun Design.
      </h1>
      <ul>
        <li
          className="text-3xl font-mono hover:bg-orange-50 hover:text-black font-extrabold bg-red-300 w-screen"
          onMouseOver={(e) =>
            handleMouseOver(
              "https://avatarfiles.alphacoders.com/375/thumb-1920-375809.png",
              e,
            )
          }
          onMouseOut={() => handleMouseOut()}
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
          onMouseOut={() => handleMouseOut()}
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
          onMouseOut={() => handleMouseOut()}
        >
          SMILE!!!!HA HA HA
        </li>
      </ul>
      {imagesrc && (
        <img
          src={imagesrc}
          alt="Hovered"
          className=" w-52  opacity-75 transform transition-all duration-300 p-2"
          style={{
            top: `${position.y - 20}px`, // Add a slight offset to the Y position
            left: `${position.x + 10}px`, // Add a slight offset to the X position
            pointerEvents: "none", // Prevents the image from interfering with mouse events
            position: "absolute",
          }}
        />
      )}
    </div>
  );
};

export default App;
