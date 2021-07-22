const React = require('react');
const ReactDOM = require('react-dom');

import Feed from './feed2';

class App extends React.Component {

  render() {
    return (
      <Feed/>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
