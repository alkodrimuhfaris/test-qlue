import React from 'react';
import paginationFunction from '../../../Helpers/paginationEngine';
import TriangleIcon from '../../ComponentLayout/TriangleIcon';
import PaginationBtn, {Ellipsis} from './PaginationBtn';

export default function Page({currentPage, search, maxPage}) {
  const [pages, setPages] = React.useState([1, 2, 3, 4, 5]);
  const [prevElipsis, setPrevElipsis] = React.useState(false);
  const [nextElipsis, setNextElipsis] = React.useState(false);

  React.useEffect(() => {
    paginationFunction({
      maxPage,
      currentPage,
      setPages,
      setPrevElipsis,
      setNextElipsis,
    });
  }, [currentPage, maxPage]);

  return (
    <section className="pagination d-flex align-items-center justify-content-center">
      <PaginationBtn
        disabledCondition={currentPage === 1}
        page={currentPage - 1}
        search={search}
      >
        <TriangleIcon deg={270} />
      </PaginationBtn>

      {!prevElipsis ? null : <Ellipsis />}

      {pages.map((val, idx) => (
        <PaginationBtn
          key={idx}
          current
          currentCondition={currentPage === val}
          page={val}
          search={search}
        >
          <span>{val}</span>
        </PaginationBtn>
      ))}

      {!nextElipsis ? null : <Ellipsis />}

      <PaginationBtn
        disabledCondition={currentPage === maxPage}
        page={currentPage + 1}
        search={search}
      >
        <TriangleIcon deg={90} />
      </PaginationBtn>
    </section>
  );
}
