import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Pagination from '../Pagination';
import { Route, Link, Redirect } from 'react-router-dom';
import '../../css/App.css';

class NewAdminCategory extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      nameErrors: [],
      imageErrors: []
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://localhost:3000/api/categories', {
      method: 'POST',
      body: data,
    }).then(results => results.json()).then(
      data => {
        if(data.status && data.status == "ok") {
          this.props.history.push('/admin/categories');
        }
        else {
          if (data.errors == {}) {
            this.setState({
              nameErrors: [],
              imageErrors: []
            })
          }
          else {
            let nameErrors = (data.errors.name && data.errors.name.length > 0) ? data.errors.name : []
            let imageErrors = (data.errors.image && data.errors.image.length > 0) ? data.errors.image : []
            this.setState({
              nameErrors,
              imageErrors
            });
          }
        }
      }
    );
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="col-md-7">
        <h2 className="form-group">New category</h2>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" name="category[name]" className="form-control" />
          <ErrorField field="Name" errors={this.state.nameErrors} />
        </div>
        <div className="form-group">
          <label>Image: </label>
          <input type="file" name="category[image]" className="form-control-file" />
          <ErrorField field="Image" errors={this.state.imageErrors} />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

function ErrorField(props) {
  if (props.errors.length > 0) {
    return (
      props.errors.map( (error, index) => <p key={index + 1} className = "error">{props.field} {error}</p>)
    );
  }
  else {
    return("");
  }
}

export default NewAdminCategory;
