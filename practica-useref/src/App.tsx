import video from "./assets/Inicia Tu Aventura en Pygame_ Cómo Crear una Ventana de Juego Básica.mp4";

import "./App.css";

import { useRef } from "react";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoPlay = () => {
    videoRef.current?.play();
  };

  const videoPause = () => {
    videoRef.current?.pause();
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <video
          ref={videoRef}
          className="transition  hover:-translate-y-4
         w-40 border-2 border-blue-500  hover:border-4 hover:border-blue-600"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="flex flex-row gap-8 mt-4">
          <button onClick={videoPlay} className="border-4 rounded-md border-blue-400 bg-blue-300 text-white p-2 transition hover:-translate-y-1">
            Play
          </button>
          <button onClick={videoPause} className="border-4 rounded-md border-red-400 bg-red-300 text-white  p-2 transition hover:-translate-y-1">
            Pause
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
