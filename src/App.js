import React, { Component } from 'react';
import Menu from './components/Menu';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { route } = this.props;

    return (
      <div>
        <Menu />
        <div className="content">{renderRoutes(route.routes)}</div>
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object
};

export default App;
