import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <html>
        <head>
        </head>
        <body>
          <p>Hello {this.props.username}</p>
        </body>
      </html>
    );
  }
}

 module.exports = App;
