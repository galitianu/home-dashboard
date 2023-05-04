import React from "react";
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
  return (
    <div className="App">
      <div className="window-container">
        <section
          onClick={openFullscreen}
          onDoubleClick={closeFullscreen}
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
          Music Player View
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
