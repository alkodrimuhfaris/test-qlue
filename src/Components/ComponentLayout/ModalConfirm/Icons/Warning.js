import React from 'react';

export default function Warning() {
  return (
    <div>
      <div className="f-modal-alert">
        <div className="f-modal-icon f-modal-warning scaleWarning">
          <span className="f-modal-body pulseWarningIns" />
          <span className="f-modal-dot pulseWarningIns" />
        </div>
      </div>
    </div>
  );
}
