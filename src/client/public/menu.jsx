import React from 'react';
import {render} from 'react-dom';

class Menu extends React.Component {
  render() {
    var acc = this.props.account;
    console.log('here here -> ' + acc.AccountId);
    return (
      <div>
          <ul id="nav">
            <li><a href={'/v1/account/' + acc.AccountId}>Home</a></li>
            <li><a href={'/v1/account/' + acc.AccountId + '/summary'}>Account</a></li>
            <li><a href={'/v1/account/' + acc.AccountId + '/summary'}>Card Management</a></li>
            <li><a href={'/v1/account/' + acc.AccountId + '/summary'}>Transfer</a></li>
            <li><a href={'/v1/account/' + acc.AccountId + '/summary'}>Payment</a></li>
        </ul>
        </div>
    );
  }
}

 module.exports = Menu;
