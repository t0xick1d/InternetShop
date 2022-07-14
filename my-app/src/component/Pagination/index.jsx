import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './style.module.scss';

const Pagination = ({ onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => {
          onChangePage(event.selected + 1);
        }}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
