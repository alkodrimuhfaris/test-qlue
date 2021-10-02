import React from 'react';
import {useLocation} from 'react-router-dom';
import {BsTable, BsBarChart, BsMap} from 'react-icons/bs';
import MenuOption from './MenuOption';
import useWindowDimensions from '../Hooks/useWindowDimension';

export default function Menu({startHover = () => {}, endHover = () => {}}) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const {pathname} = location;
  const menu = [
    {title: 'Table', route: '/table', Icon: BsTable},
    {title: 'Chart', route: '/chart', Icon: BsBarChart},
    {title: 'Map', route: '/map', Icon: BsMap},
  ];
  const {md} = useWindowDimensions();

  React.useEffect(() => {
    if (!md) {
      setOpen(false);
    }
  }, [md]);

  return (
    <ul
      onMouseEnter={startHover}
      onMouseLeave={endHover}
      className={`menu-container ${open ? 'open' : ''}`}
    >
      {menu.map((val, idx) => (
        <MenuOption currentRoute={pathname} key={idx} val={val} idx={idx} />
      ))}
    </ul>
  );
}
