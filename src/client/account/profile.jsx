import React from 'react';
import {render} from 'react-dom';

class Profile extends React.Component {
  render() {

    var acc = this.props.account.BankAccount;
    console.log(acc);
    return (
      <html>
        <head></head>
        <body>

          <h2>Welcome to ABC Bank, {acc.Name}</h2>
          <h4>Profile Page</h4>

          <table>
            <tbody>
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
            </tbody>
          </table>
        </body>
      </html>
    );
  }
}

module.exports = Profile;
