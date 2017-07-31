import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router';
{/*import Menu from './menu.jsx'; */}

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
            <li><a href={'/v1/transfer/' + acc.AccountId + '/summary'}>Transfer</a></li>
            <li><a href={'/v1/payment/' + acc.AccountId + '/summary'}>Payment</a></li>
        </ul>
        </div>
    );
  }
}

class App extends React.Component {
  render() {
    var acc = this.props.account;
    this.state = {userAccount:this.props.account};

    return (
      <html>
        <head>
        </head>
        <body>
          <h2>Welcome to Online Banking, {acc.Name}</h2>
          <Menu account={this.props.account}></Menu>
        </body>
      </html>
    );
  }
}

 module.exports = App;
