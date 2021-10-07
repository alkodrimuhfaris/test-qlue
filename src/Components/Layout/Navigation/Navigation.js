import React from 'react';
import Menu from './Menu';
import TopNav from './TopNav';
import useWindowDimensions from '../../Hooks/useWindowDimension';
import BurgerButton from './BurgerButton';
import Logo from './Logo';

export default function Navigation({hover, setHover}) {
  const [open, setOpen] = React.useState(false);
  const {sm} = useWindowDimensions();
  return (
    <div className="navigation">
      <TopNav hover={hover} />
      <Logo setHoverLogo={setHover} hover={hover} />
      <Menu
        open={open}
        startHover={() => setHover(true)}
        endHover={() => setHover(false)}
        hover={hover}
      />
      {!sm ? null : <BurgerButton setOpen={setOpen} open={open} />}
    </div>
  );
}
