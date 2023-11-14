import React from "react";
import { FcTodoList } from "react-icons/fc";

export const Header = () => {
  const x = 1;

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/assets/images/logo.png" alt="Todolist" />
        </div>
      </nav>
    </header>
  );
};