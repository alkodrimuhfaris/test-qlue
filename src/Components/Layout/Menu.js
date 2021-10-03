import React from 'react';
import {useLocation} from 'react-router-dom';
import MenuOption from './MenuOption';
import useWindowDimensions from '../Hooks/useWindowDimension';
import useConfig from '../Hooks/useConfigRoute';

export default function Menu({
  startHover = () => {},
  endHover = () => {},
  open,
}) {
  const location = useLocation();
  const {pathname} = location;
  const menu = useConfig();

  const {sm} = useWindowDimensions();

  return (
    <ul
      onMouseEnter={!sm ? startHover : null}
      onMouseLeave={!sm ? endHover : null}
      className={`menu-container ${open ? '' : 'open'}`}
    >
      {menu.map((val, idx) => (
        <MenuOption currentRoute={pathname} key={idx} val={val} idx={idx} />
      ))}
    </ul>
  );
}
