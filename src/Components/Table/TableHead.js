import React from 'react';

export default function TableHead() {
  return (
    <div className="row no-gutters table-head">
      <div className="col-3 product-name">
        <p className="center">Name</p>
      </div>
      <div className="col-2">
        <p className="center">Photo</p>
      </div>
      <div className="col-2">
        <p className="center">Status</p>
      </div>
      <div className="col-2">
        <p className="center">Species</p>
      </div>
      <div className="col-3">
        <p className="center">Location</p>
      </div>
    </div>
  );
}
