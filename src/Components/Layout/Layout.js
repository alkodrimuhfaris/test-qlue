import React from 'react';
import Content from './Content/Content';
import Navigation from './Navigation/Navigation';

export default function Layout(props) {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="parent">
      <Navigation hover={hover} setHover={setHover} />
      <Content hover={hover}>{props.children}</Content>
    </div>
  );
}
