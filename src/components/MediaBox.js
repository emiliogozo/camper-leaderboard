import React from 'react';

/**
 * Media Box component
 */
function MediaBox(props) {
  return (
    <a className='media-box' href={'https://www.freecodecamp.com/' + props.user.username} target='_blank'>
      <img src={props.user.img} alt={props.user.username} />
      <span>{props.user.username}</span>
    </a>
  );
}

MediaBox.propTypes = {
    user: React.PropTypes.object.isRequired
};

module.exports = MediaBox;