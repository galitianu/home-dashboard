import React, { useEffect } from "react";
import "./App.css";

const elem = document.documentElement;
function openFullscreen() {
  if (elem?.requestFullscreen) {
    elem.requestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

function App() {
  useEffect(() => {
    const elem = document.documentElement;
    elem.requestFullscreen();
  }, []);

  return (
    <div className="App">
      <div className="window-container">
        <section
          // onClick={openFullscreen}
          // onDoubleClick={closeFullscreen}
          className="window camera-view"
        >
          <img
            className="camera-image"
            src="http://admin:12345@192.168.1.100/Streaming/channels/1/preview"
            width="100%"
            height="100%"
          ></img>
        </section>
        <section className="window power-view">Consumption View</section>
        <section className="window history-view">Historical Data View</section>
        <section className="window browser-view">Browser View</section>
        <section className="window music-player-view">
          <div className="player-container">
            <img
              className="album-cover"
              src="https://i.scdn.co/image/ab67616d0000b2731059a0a8fcddb78f89a4c88e"
              alt="Album Cover"
            />
            <div className="song-title">Carnaval de São Vicente</div>
            <div className="song-author">Cesária Evora</div>
            <div className="buttons-container">
              <button className="direction-button">
                <svg
                  className="play-icon"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 9.13397C5.83333 9.51887 5.83333 10.4811 6.5 10.866L18.5 17.7942C19.1667 18.1791 20 17.698 20 16.9282L20 3.0718C20 2.302 19.1667 1.82087 18.5 2.20577L6.5 9.13397Z"
                    fill="white"
                  />
                  <rect
                    width="4"
                    height="16"
                    rx="1"
                    transform="matrix(-1 0 0 1 4 2)"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="play-button">
                <svg
                  className="play-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10L5 18.6603L5 1.33975L20 10Z" fill="white" />
                </svg>
              </button>
              <button className="direction-button">
                <svg
                  className="play-icon"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 9.13397C19.1667 9.51887 19.1667 10.4811 18.5 10.866L6.5 17.7942C5.83333 18.1791 5 17.698 5 16.9282L5 3.0718C5 2.302 5.83333 1.82087 6.5 2.20577L18.5 9.13397Z"
                    fill="white"
                  />
                  <rect
                    x="21"
                    y="2"
                    width="4"
                    height="16"
                    rx="1"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="progress-bar">
            <div className="progress-bar-done"></div>
            <div className="progress-bar-todo"></div>
          </div>
        </section>
        <section
          onClick={openFullscreen}
          onDoubleClick={closeFullscreen}
          className="window weather-view"
        >
          Weather View
        </section>
      </div>
    </div>
  );
}

export default App;
