import React from 'react';
import Content from 'dangerously-set-html-content';

export default function TableBody({val, idx}) {
  const {name, id, image, status, species, location} = val;
  return (
    <div key={idx} className="row no-gutters table-body">
      <div className="col-3 product-name">
        <Content html={name} />
      </div>
      <div className="col-2 table-photo-wrapper">
        <img className="table-photo" src={image} alt={`character-${id}`} />
      </div>
      <div className="col-2">
        <p className="center">{status}</p>
      </div>
      <div className="col-2">
        <p className="center">{species}</p>
      </div>
      <div className="col-3">{location.name}</div>
    </div>
  );
}
