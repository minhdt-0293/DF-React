import React, { Fragment } from 'react';

const Pagination = ({ currentPage, arrPages, handleClickPaginate }) => {
  const ListPages = () =>
    arrPages.map(page => (
      <li
        key={page}
        className={'page-item' + (currentPage === page ? ' active' : '')}
      >
        <span
          to="#"
          className="page-link"
          onClick={() => handleClickPaginate({ page: page })}
          data-page={page}
        >
          {page}
        </span>
      </li>
    ));

  return (
    <Fragment>
      <nav aria-label="Page navigation example">
        <ul className="justify-content-center pagination">
          <ListPages />
        </ul>
      </nav>
    </Fragment>
  );
};

export default Pagination;
