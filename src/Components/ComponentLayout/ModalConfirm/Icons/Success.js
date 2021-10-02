import React from 'react';
import './IconStyle.scss';

export default function Success() {
  return (
    <div>
      <div className="s-modal-alert">
        <div className="s-modal-icon s-modal-success animate">
          <span className="s-modal-line s-modal-tip animateSuccessTip" />
          <span className="s-modal-line s-modal-long animateSuccessLong" />
          <div className="s-modal-placeholder" />
          <div className="s-modal-fix" />
        </div>
      </div>
    </div>
  );
}
