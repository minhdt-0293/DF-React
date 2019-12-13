import React, { Component } from 'react';
import '../../css/App.css';

class ErrorField extends Component {
  render() {
    if (this.props.errors.length > 0) {
      return (
        this.props.errors.map( (error, index) => <p key={index + 1} className = "error">{this.props.field} {error}</p>)
      );
    }
    else {
      return null;
    }
  }
}

export default ErrorField;
