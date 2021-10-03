import React from 'react';

export default function TableHead() {
  return (
    <div className="row no-gutters table-head">
      <div className="col-3">
        <p className="center">Provinsi</p>
      </div>
      <div className="col-2">
        <p className="center">Positif Covid</p>
      </div>
      <div className="col-2">
        <p className="center">Sembuh</p>
      </div>
      <div className="col-2">
        <p className="center">Meninggal</p>
      </div>
      <div className="col-3">
        <p className="center">Aksi</p>
      </div>
    </div>
  );
}
