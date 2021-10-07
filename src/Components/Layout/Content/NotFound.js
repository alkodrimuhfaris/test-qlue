import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found">
        <h1>404 not found</h1>
        <span>
          The page you are looking for might have been removed, had its name
          changed, or currently unavailable
        </span>
        <Link className="not-found-btn" to={{pathname: '/'}}>
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
