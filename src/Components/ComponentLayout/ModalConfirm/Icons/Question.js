import React from 'react';
import './IconStyle.scss';

export default function Question() {
  return (
    <div>
      <div className="q-modal-alert">
        <div className="q-modal-icon q-modal-question scaleQuestion">
          <span className="q-modal-body pulseQuestionIns" />
        </div>
      </div>
    </div>
  );
}
