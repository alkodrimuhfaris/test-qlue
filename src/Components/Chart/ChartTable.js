import React from 'react';
import {useSelector} from 'react-redux';
import ErrorHandling from '../Layout/ErrorHandling';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function ChartTable() {
  const {
    showData: data,
    success,
    pending,
    error,
  } = useSelector((state) => state.chart);
  return (
    <div className="table-container rounded shadow">
      <div className="table-inside">
        <TableHead />
        {data.length && success ? (
          data.map((val, idx) => <TableBody val={val} key={idx} idx={idx} />)
        ) : (
          <ErrorHandling success={success} loading={pending} error={error} />
        )}
      </div>
    </div>
  );
}
