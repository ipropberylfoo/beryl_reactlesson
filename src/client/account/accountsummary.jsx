import React from 'react';
import {render} from 'react-dom';
var jsonfile = require('jsonfile');

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        accounts: []
     }
    this.renderAccount = this.renderAccount.bind(this);
  };

  renderAccount() {
    var e = this.state.accounts;
   return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Name</td><td> : </td><td>{e.Name}</td>
            </tr>
            <tr>
            <td>Account No</td><td> : </td><td>{e.AccountId}</td>
            </tr>
            <tr>
            <td>Birth Date</td><td> : </td><td>{e.DOB}</td>
            </tr>

          </tbody>
        </table>
        <table style={{backgroundColor: 'grey'}}>
          <tbody>
          <tr><td></td></tr>
          {e.Account.map((row, i) =>
          <tr key={i}>
            <td>{row.SubType}</td><td> : </td><td>{row.Balance}</td>
          </tr>
          )}
          </tbody>
        </table>
      </div>
      )
  };

  componentWillMount(){

      var PersonAccount = require('../../../src/database/' + this.props.accountid + '.json');
      this.setState({
          loading: false,
          accounts: PersonAccount.BankAccount
      });
 };

 /* readFile(){
    var file = './src/database/' + this.props.accountid + '.json';

    var accountI;
    jsonfile.readFile(file, function(err, obj){
      console.log('readfile ' + file + ' -> ' + obj);
      return obj;
    });

 }; */

  render() {
    return (
      <html>
        <head></head>
        <body>
          { this.state.loading ? 'loading...' : this.renderAccount() }
        </body>
      </html>
    );
  }
}

module.exports = Summary;
