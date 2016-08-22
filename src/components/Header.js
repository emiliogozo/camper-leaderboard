import React from 'react';

/**
 * Header component
 */
function Header(props) {
  return (
    <header>
      <a href='https://www.freecodecamp.com'>
        <img alt='freeCodeCamp' src='https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg' />
      </a>
    </header>
  );
}

module.exports = Header;