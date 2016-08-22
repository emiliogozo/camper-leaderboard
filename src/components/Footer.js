import React from 'react';

/**
 * Footer component
 */
function Footer(props) {
  return (
    <footer>
      <div className='container'>
        <div className='row pull-right'>
          <p>by <a href='http://www.freecodecamp.com/emiliogozo'>Emilio Gozo</a></p>
        </div>
      </div>
    </footer>
  );
}

module.exports = Footer;