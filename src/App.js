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
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.object
};

export default App;
