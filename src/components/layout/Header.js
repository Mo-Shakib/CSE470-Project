import React from 'react';
import { TbCheckbox } from 'react-icons/tb'


export const Header = () => {
    const [checked, setChecked] = React.useState(false);
    
    return (
    
    <header className="App-header">
      <nav>
        <div className='logo'>
            <h1>Logo</h1>
        </div>
        <div className='settings'>
            <ul>
                <li><TbCheckbox/> Hello</li>
                <li><TbCheckbox /></li>
                <li><TbCheckbox /></li>
                <li><TbCheckbox /></li>
            </ul>
        </div>

        </nav>
    </header>
  );
}