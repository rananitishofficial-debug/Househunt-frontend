import React from "react";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <span role="img" aria-label="house">
          🏠
        </span>{" "}
        HouseHunt - By Team UNB ✨
      </header>

      <main className="app-main">
        <Home />
      </main>

      <footer className="app-footer">
        <small>Backend: Node + Express + MongoDB | Frontend: React</small>
      </footer>
    </div>
  );
}

export default App;