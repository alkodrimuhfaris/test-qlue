import React from 'react';
import {Link} from 'react-router-dom';
import useWindowDimensions from '../../Hooks/useWindowDimension';

export default function Logo({hover, setHoverLogo}) {
  const {sm} = useWindowDimensions();
  return (
    <Link style={{textDecoration: 'none'}} to={{pathname: '/'}}>
      {hover ? (
        <img
          onMouseEnter={sm ? null : () => setHoverLogo(true)}
          className={`logo ${hover ? 'hover' : ''}`}
          src="/assets/logo/logo.png"
          alt="logo"
        />
      ) : (
        <img
          onMouseEnter={sm ? null : () => setHoverLogo(true)}
          className={`logo ${hover ? 'hover' : ''}`}
          src="/assets/logo/logo-small.png"
          alt="logo"
        />
      )}
    </Link>
  );
}
