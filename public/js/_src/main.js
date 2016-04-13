const React = require('react');
const ReactDOM = require('react-dom');
const pkg = require('../../../package.json');

class App extends React.Component
{

  static get defaultProps() {
    return {
      name: pkg.name,
      description: pkg.description,
      version: pkg.version
    };
  }

  render() {
    const { name, version } = this.props;

    return (
      <div>
        <h1>{ name }</h1>
        <h3>{ version }</h3>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));
