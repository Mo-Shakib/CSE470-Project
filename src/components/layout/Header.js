import React from 'react';
import { BsFillGearFill } from 'react-icons/bs'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { Content } from './Content';

export const Header = () => {

    return (
    <header className="App-header">
      <nav>
        
        <div className='logo'>
            <h1><IoMdCheckboxOutline/> Todo App</h1>
            <img src='logo.png' alt='logo' />
        </div>

        <div className='settings'>
            <h1><BsFillGearFill /> Settings</h1>
        </div>

        </nav>
    </header>
  );
}