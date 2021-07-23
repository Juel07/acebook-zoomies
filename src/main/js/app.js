const React = require('react');
const ReactDOM = require('react-dom');

import AppRouter from './router';

class App extends React.Component {

  render() {
    return (
      <AppRouter/>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
