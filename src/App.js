import React from "react";
import { Header } from "./components/layout/Header";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <p>
          Hello, There! <br />
          <small>from App.js</small>
        </p>
      </main>
    </div>
  );
}