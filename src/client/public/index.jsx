import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    var name;
    if (this.props.username != null)
    {
      name = this.props.username;
    }
    else{
      name = 'World';
    }
    return (
      <html>
        <head>
        </head>
        <body>
          <p>Hello {name}</p>
        </body>
      </html>
    );
  }
}

 module.exports = App;
