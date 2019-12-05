import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Flash = props => {
  const { type, message } = props;
  let className = `alert alert-${type}`;
  let elm = document.getElementsByClassName('alert');
  useEffect(() => {
    if (elm[0] != undefined) {
      elm[0].style.display = 'block';
      setTimeout(function() {
        elm[0].style.display = 'none';
      }, 3000);
    }
  });

  const flash =
    message === '' ? null : (
      <div className={className} role="alert">
        {message}
      </div>
    );
  return flash;
};

Flash.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string
};

export default Flash;
