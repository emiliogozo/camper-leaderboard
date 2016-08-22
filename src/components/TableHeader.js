import React from 'react';

/**
 * Table Header component
 */
function TableHeader(props) {
  return (
    <thead>
      <tr>
        <th>#</th>
        <th>Camper Name</th>
        <th className='clickable' onClick={() => props.getTopUsers('recent') } >
          Points in past 30 days
          {props.listType === 'recent' && <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>}
        </th>
        <th className='clickable' onClick={() => props.getTopUsers('alltime') } >
          All time points
          {props.listType === 'alltime' && <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>}
        </th>
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
    getTopUsers: React.PropTypes.func.isRequired,
    listType: React.PropTypes.string.isRequired
}

module.exports = TableHeader;