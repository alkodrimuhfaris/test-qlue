import React from 'react';
import {useSelector} from 'react-redux';
import BarChart from './BarChart';

export default function Upper() {
  const {indoData} = useSelector((state) => state.chart);
  React.useEffect(() => {
    console.log(indoData);
  }, [indoData]);
  return (
    <div className="upper-chart">
      <div className="title">
        <h1>Data Indonesia</h1>
      </div>
      <div className="content-chart">
        <BarChart data={indoData} />
      </div>
    </div>
  );
}
