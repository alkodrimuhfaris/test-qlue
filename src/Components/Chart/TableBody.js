import React from 'react';
import Content from 'dangerously-set-html-content';
import {useDispatch} from 'react-redux';
import currencyFormat from '../../Helpers/currencyFormat';
import actions from '../../redux/actions';

export default function TableBody({val, idx}) {
  const dispatch = useDispatch();
  const {name, fid, positif, sembuh, meninggal} = val;
  return (
    <div key={idx} className="row no-gutters table-body">
      <div className="col-3 d-flex province align-items-center justify-content-center">
        <Content html={name} />
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="center">{currencyFormat(positif, false, 0, '')}</p>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="center">{currencyFormat(sembuh, false, 0, '')}</p>
      </div>
      <div className="col-2 d-flex align-items-center justify-content-center">
        <p className="center">{currencyFormat(meninggal, false, 0, '')}</p>
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(actions.api.selectChart(fid));
          }}
          className="btn btn-info"
        >
          Info
        </button>
      </div>
    </div>
  );
}
