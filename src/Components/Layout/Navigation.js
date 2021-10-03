import React from 'react';
import Menu from './Menu';
import TopNav from './TopNav';
import useWindowDimensions from '../Hooks/useWindowDimension';
import BurgerButton from './BurgerButton';

export default function Navigation({hover, setHover}) {
  const [open, setOpen] = React.useState(false);
  const {md} = useWindowDimensions();
  return (
    <div className="navigation">
      <TopNav hover={hover} />
      {hover ? (
        <img className="logo" src="/assets/logo/logo.png" alt="logo" />
      ) : (
        <img className="logo" src="/assets/logo/logo-small.png" alt="logo" />
      )}
      <Menu
        open={open}
        startHover={() => setHover(true)}
        endHover={() => setHover(false)}
      />
      {!md ? null : <BurgerButton setOpen={setOpen} open={open} />}
    </div>
  );
}
