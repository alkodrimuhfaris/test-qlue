import React from 'react';
import ChartTable from './ChartTable';
import PaginationChart from './PaginationChart';

export default function TableChart() {
  return (
    <div className="table">
      <ChartTable />
      <PaginationChart />
    </div>
  );
}
