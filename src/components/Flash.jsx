//Home.jsx
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Flash = props => {
  const { type, message } = props;
  let className = `alert alert-${type}`;
  useEffect(() => {
    let elm = document.getElementsByClassName('alert');

    setTimeout(function() {
      elm[0].style.display = 'none';
    }, 3000);
  });

  return (
    <div className={className} role="alert">
      <a className="close" data-dismiss="alert" href="#" aria-hidden="true">
        &times;
      </a>
      {message}
    </div>
  );
};

Flash.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default Flash;
