import React from 'react';
import {useSelector} from 'react-redux';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';

export default function Layout(props) {
  const [hover, setHover] = React.useState(false);
  const {isLoggedIn} = useSelector((state) => state.auth);

  return isLoggedIn ? (
    <div className="parent">
      <Navigation hover={hover} setHover={setHover} />
      <Content hover={hover}>{props.children}</Content>
    </div>
  ) : (
    <>{props.children}</>
  );
}
