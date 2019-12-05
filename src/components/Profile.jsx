import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import './../css/Profile.css';
import Flash from './Flash';

class Profile extends Component {
  constructor(props) {
    let currentUser = props.currentUser;
    super(props);
    this.state = {
      email: currentUser.email,
      username: currentUser.username,
      address: currentUser.address,
      phone: currentUser.phone,
      image: currentUser.image.url,
      role: currentUser.role,
      id: currentUser.id,
      messageFlash: ''
    };
  }

  render() {
    let {
      email,
      username,
      address,
      phone,
      image,
      role,
      id,
      messageFlash
    } = this.state;

    const onUpdateProfile = e => {
      e.preventDefault();
      const formData = new FormData();
      const file = document.querySelector('[type=file]').files[0];
      if (file) formData.append('user[image]', file);

      formData.append(
        'user[address]',
        document.getElementById('address').value
      );
      formData.append('user[phone]', document.getElementById('phone').value);
      formData.append('user[role]', document.getElementById('role').value);
      this.props.updateProfile({ formData: formData, id: id });
      this.setState({ messageFlash: 'Update successfully' });
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

    return (
      <form onSubmit={onUpdateProfile}>
        <Flash type="success" message={messageFlash} />
        <h1>Profile</h1>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly
              className="form-control"
              id="email"
              value={email}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              readOnly
              className="form-control"
              id="username"
              defaultValue={username}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="address" className="col-sm-2 col-form-label">
            Address
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="address"
              defaultValue={address}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="phone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="phone"
              defaultValue={phone}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="image" className="col-sm-2 col-form-label">
            Image
          </label>
          <div className="col-sm-10 Profile-upload-image">
            <div className="Profile-image">
              <img src={image} />
            </div>
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
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="role" className="col-sm-2 col-form-label">
            Role
          </label>
          <div className="col-sm-10">
            <select className="form-control" id="role" defaultValue={role}>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2"></div>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  status: 'ok'
});

const mapDispatchToProps = dispatch => ({
  updateProfile: data => {
    dispatch(actions.updateProfile(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
