import React from 'react';
import './IconStyle.scss';

export default function Error() {
  return (
    <div>
      <div className="e-modal-alert">
        <div className="e-modal-icon e-modal-error animate">
          <span className="e-modal-x-mark">
            <span className="e-modal-line e-modal-left animateXLeft" />
            <span className="e-modal-line e-modal-right animateXRight" />
          </span>
          <div className="e-modal-placeholder" />
          <div className="e-modal-fix" />
        </div>
      </div>
    </div>
  );
}
