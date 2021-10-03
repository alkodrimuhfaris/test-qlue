import React from 'react';
import {useSelector} from 'react-redux';
import BarChart from './BarChart';

export default function Upper() {
  const {indoData} = useSelector((state) => state.chart);
  return (
    <div className="upper-chart">
      <div className="title">
        <h1>Kasus Harian Indonesia</h1>
      </div>
      <div className="content-chart">
        <div className="content-chart-wrapper">
          <BarChart data={indoData} />
        </div>
      </div>
    </div>
  );
}
