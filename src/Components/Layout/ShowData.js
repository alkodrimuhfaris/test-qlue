import React from 'react';

export default function ShowData({changePerPage = (e) => e, dataShowed}) {
  const option = [5, 8, 10, 15, 25, 'all'];

  const changeDataShowed = (e) => {
    e.preventDefault();
    changePerPage(e.target.value);
  };

  return (
    <div className="show-data">
      <span className="text">Show</span>
      <select value={dataShowed} onChange={changeDataShowed} className="select">
        {option.map((val, idx) => (
          <option value={val} key={idx} defaultValue={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
