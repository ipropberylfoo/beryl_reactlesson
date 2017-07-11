import React from 'react';
import {render} from 'react-dom';

class Profile extends React.Component {
  render() {

    var acc = this.props.account;

    return (
      <html>
        <head></head>
        <body>

          <h2>Welcome to Beryl Online Banking, {acc.Name}</h2>

          <table>
            <tr>
              <td>Account Id</td>
              <td>:</td>
              <td>{acc.AccountId}</td>
            </tr>
            <tr>
              <td>Account Holder Name</td>
              <td>:</td>
              <td>{acc.Name}</td>
            </tr>
            <tr>
              <td>DOB</td>
              <td>:</td>
              <td>{acc.DOB}</td>
            </tr>
          </table>
        </body>
      </html>
    );
  }
}

module.exports = Profile;
