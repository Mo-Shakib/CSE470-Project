import React from "react";
import { Header } from "./components/View/layout/Header";
import { Content } from "./components/View/layout/Content";

export const App = () => (
    <div className="App">
      <header className="App-header">
        <p>Hello, World!</p>
      </header>
      <Header />
      <Content />
    </div>
  );