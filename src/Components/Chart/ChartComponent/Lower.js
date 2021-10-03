import React from 'react';
import {useSelector} from 'react-redux';
import PieChart from './PieChart';

export default function Lower() {
  const {selectedData} = useSelector((state) => state.chart);
  const [data, setData] = React.useState([]);
  const [prov, setProvinsi] = React.useState('');

  React.useEffect(() => {
    if (selectedData) {
      const {name, positif, sembuh, meninggal} = selectedData;
      const d = [
        {value: positif, label: 'Positif', color: '#00D6FF'},
        {value: meninggal, label: 'Meninggal', color: '#FFE468'},
        {value: sembuh, label: 'Sembuh', color: '#BB40AC'},
      ];
      setData(d);
      setProvinsi(name);
    }
  }, [selectedData]);

  return (
    <div className="lower-chart">
      <div className="title">
        <h1>Kasus {prov}</h1>
      </div>
      <div className="content-chart">
        <div className="content-chart-wrapper">
          <PieChart data={data} />
        </div>
      </div>
    </div>
  );
}
