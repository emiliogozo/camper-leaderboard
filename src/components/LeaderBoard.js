import React from 'react';
import fccHelper from '../utils/freeCodeCampHelper';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

/**
 * Leader Board component
 */
class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      listType: '',
      isLoading: true
    };
  }
  componentDidMount() {
    this._getTopUsers();
  }
  render() {
    return (
      <div className='container'>
        <div className='panel panel-default'>
          <div className='panel-heading text-center'><h2>Leaderboard</h2></div>
          <table className='table table-striped table-bordered'>
            {!this.state.isLoading &&
              <TableHeader
                getTopUsers={listType => this._getTopUsers(listType) }
                listType={this.state.listType} />
            }
            <tbody>
              {!this.state.isLoading && this.state.users.map(this._populateRow) }
            </tbody>
          </table>
          {this.state.isLoading && <h3 className='text-center'>Loading...</h3>}
        </div>
      </div>
    );
  }
  _getTopUsers(listType = 'recent') {
    if (listType !== this.state.listType) {
      fccHelper.getTopUsers(listType).then(res => {
        this.setState({
          users: res.data,
          isLoading: false,
          listType: listType
        });
      });
    }
  }
  _populateRow(user, i) {
    return <TableRow key={user.username} user={user} index={i + 1} />;
  }
}

module.exports = LeaderBoard;