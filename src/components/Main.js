import React from 'react';

import Header from './Header';
import Footer from './Footer';
import LeaderBoard from './LeaderBoard';

/**
 * Main component
 */
function Main(props) {
  return (
    <div>
      <Header />
      <LeaderBoard />
      <Footer />
    </div>
  );
}

module.exports = Main;