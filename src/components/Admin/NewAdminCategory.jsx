import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Pagination from '../Pagination';
import ErrorField from './ErrorField';
import { Route, Link, Redirect } from 'react-router-dom';
import callApi from '../../sagas/call_api';

class NewAdminCategory extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      nameErrors: [],
      imageErrors: []
    };
  };

  setError = (field, errors, state_key) => {
    let fieldErrors = (errors[field] && errors[field].length > 0) ? errors[field] : [] ;
    this.setState({ [state_key] : fieldErrors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    callApi('POST', 'categories', data).then(
      result => {
        let data = result.data
        if(data.status && data.status == "ok") {
          this.props.history.push('/admin/categories');
        }
        else {
          this.setError('name', data.errors, 'nameErrors');
          this.setError('image', data.errors, 'imageErrors');
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

export default NewAdminCategory;
