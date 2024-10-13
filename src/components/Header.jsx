import React from 'react'

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>{isDarkMode ? 'Dark' : 'Light'}
        MODE
        </button>
    </header>
  )
}

export default Header;