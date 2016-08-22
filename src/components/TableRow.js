import React from 'react';

import MediaBox from './MediaBox'

/**
 * Table Row component
 */
function TableRow(props) {
  return (
    <tr>
      <td className='text-center'>{props.index}</td>
      <td><MediaBox user={props.user} /></td>
      <td className='text-center'>{props.user.recent}</td>
      <td className='text-center'>{props.user.alltime}</td>
    </tr>
  );
}

TableRow.propTypes = {
    index: React.PropTypes.number.isRequired,
    user: React.PropTypes.object.isRequired
};

module.exports = TableRow;