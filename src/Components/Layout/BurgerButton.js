import React from 'react';

export default function BurgerButton({setOpen, open}) {
  return (
    <div className="burger-wrapper">
      <button
        type="button"
        onClick={() => setOpen((x) => !x)}
        className={`burger-button ${open ? 'open' : ''}`}
      >
        {[1, 2, 3].map((val) => (
          <span key={val} className={`child-${val} ${open ? 'open' : ''}`} />
        ))}
      </button>
    </div>
  );
}
