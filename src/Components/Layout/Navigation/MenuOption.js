import React from 'react';
import {Link} from 'react-router-dom';

export default function MenuOption({currentRoute, val, idx}) {
  const {title, route, Icon} = val;
  return (
    <li
      className={`w-100 menu ${currentRoute === route ? 'selected' : ''}`}
      key={idx}
    >
      <div className="hover-stylized" />
      <Link to={`${route}`} className="menu-option">
        <Icon />
        <span className="text-menu">{title}</span>
      </Link>
    </li>
  );
}
