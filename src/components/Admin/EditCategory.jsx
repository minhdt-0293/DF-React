import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import '../../css/Profile.css';
import Flash from '../Flash';
import { withRouter } from 'react-router-dom';

class AdminEditCategory extends Component {

  componentDidMount() {
    let categoryId = this.props.match.params.id;
    this.props.fetchCategory(categoryId);
  }

  componentWillUnmount() {
    this.props.clearOldCategory();
  }

  render() {

    let { id, name, image, description } = this.props.category;

    const onUpdateCategory = e => {
      e.preventDefault();

      const formData = new FormData();
      const file = document.querySelector('[type=file]').files[0];
      if (file) formData.append('category[image]', file);
      formData.append(
        'category[id]', id
      );

      formData.append(
        'category[description]', document.getElementById('description').value
      );

      formData.append(
        'category[name]', document.getElementById('name').value
      );

      this.props.updateCategory(formData, this.props.match.params.id);
    };

    const previewImage = e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.setState({ image: reader.result });
        };
        reader.readAsDataURL(file);
      } else {
        this.setState({ image: '' });
      }
    };

    const flashMessage = () => (
      this.props.status === 'ok' ? (
        <Flash type="success" message="Update successfully" />
      ) : null
    );

    if (this.props.statusFetch === 'ok'){
      return (
        <form onSubmit={onUpdateCategory}>
          {flashMessage()}
          <h1>Edit Category</h1>
          <div className="form-group">
            <div className="row">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={name}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="row">
              <label htmlFor="image" className="col-sm-2 col-form-label">
                Image
              </label>
              <div className="col-sm-10 Profile-upload-image">
                <div className="Profile-browser col-sm-10">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="image"
                    onChange={previewImage}
                  />
                  <label className="custom-file-label" htmlFor="image">
                    Choose file
                  </label>
                </div>
                <div className="Profile-image col-sm-2">
                  <img src={image} alt={name} />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="description"
                defaultValue={description}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2"></div>
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Update Category
              </button>
            </div>
          </div>
        </form>
      );
    } else {
      return <></>;
    }
  }
}

const mapStateToProps = state => ({
  status: state.adminUpdateCategory.status,
  category: state.adminUpdateCategory.category,
  statusFetch: state.adminUpdateCategory.statusFetch
});

const mapDispatchToProps = dispatch => ({
  updateCategory: (data, categoryId) => {
    dispatch(actions.updateCategory(data, categoryId));
  },
  fetchCategory: id => {
    dispatch(actions.fetchCategory(id));
  },
  clearOldCategory: () => {
    dispatch(actions.clearOldCategory());
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminEditCategory));
