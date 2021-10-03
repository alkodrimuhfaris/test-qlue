import React from 'react';
import {useHistory} from 'react-router-dom';

export default function PaginationBtn({
  page,
  search,
  disabledCondition,
  current = false,
  currentCondition,
  ...props
}) {
  const history = useHistory();
  return (
    <span
      className={
        current
          ? currentCondition
            ? 'current'
            : ''
          : disabledCondition
          ? 'disable'
          : ''
      }
    >
      <button
        disabled={disabledCondition}
        type="button"
        className="pagination-item"
        onClick={() =>
          history.push(
            search
              ? {
                  search: `?page=${page}&search=${search}`,
                }
              : {
                  search: `?page=${page}`,
                },
          )
        }
      >
        <span>{props.children}</span>
      </button>
    </span>
  );
}

export function Ellipsis() {
  return (
    <span className="disable">
      <button type="button" disabled className="pagination-item">
        <span>...</span>
      </button>
    </span>
  );
}
