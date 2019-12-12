import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Pagination from '../Pagination';
import { Route, Link } from 'react-router-dom';
import * as urls from '../../constants/Url';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPage: 1,
      showModal: false
    };
  }

  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { currentPage, categories, totalPage } = this.props;

    let arrPages = [];

    for (let page = 1; page <= totalPage; page++) {
      arrPages.push(page);
    }

    const RowCategory = () =>
      categories.map(category => (
        <tr key={category.id + category.name}>
          <th scope="row">{category.id}</th>
          <td>
            <img src={urls.PUBLIC_API_URL + category.image.url} height="75" width="75" />
          </td>
          <td>{category.name}</td>
          <td>
            <span
              className="text-danger mx-1 cursor-pointer"
              onClick={event =>
                handleClickDelete(event, category.id, category.name)
              }
              data-toggle="modal"
              data-target="#FormCategory"
            >
              Delete
            </span>
          </td>
        </tr>
      ));

    const handleClickPaginate = ({ page }) => {
      this.props.setCurrentPage(page);
      this.props.fetchCategories({ page });
    };

    const handleClickDelete = (event, categoryId, categoryName) => {
      if (window.confirm('Confirm delete category "' + categoryName + '" ?')) {
        event.preventDefault();
        this.props.deleteCategory(categoryId, currentPage);
      }
    };

    return (
      <div
        className="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div className="row">
          <div className="col-12">
            <h1 className="my-4 admin-title">Categories</h1>
            <Link to="/admin/categories/new" className="btn btn-primary form-group">
              Create category
            </Link>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <RowCategory />
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Pagination
              currentPage={currentPage}
              arrPages={arrPages}
              handleClickPaginate={handleClickPaginate}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const adminState = state.adminCategories;
  return {
    currentPage: adminState.currentPage,
    categories: adminState.categories,
    totalPage: adminState.total_pages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: page => {
      dispatch(actions.fetchCategories(page));
    },
    deleteCategory: (categoryId, page) => {
      dispatch(actions.deleteCategory({ categoryId: categoryId, page: page }));
    },
    setCurrentPage: page => dispatch(actions.setCurrentPage(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
