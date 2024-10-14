import React from 'react'

function Header({ isDarkMode, onDarkModeClick }) {
  let modeText; if(isDarkMode) {
    modeText= 'Dark';
  }else{
    modeText= 'Light';
  }
  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>{modeText}
        MODE
        </button>
    </header>
  )
}

export default Header;