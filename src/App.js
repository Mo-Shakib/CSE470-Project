import React from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Sidebar } from "./components/layout/Sidebar";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Sidebar />
      <main>
        <p>
          Hello, There! <br />
          <small>from App.js</small>
        </p>
      </main>
    </div>
  );
}