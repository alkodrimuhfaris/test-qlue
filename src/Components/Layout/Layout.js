import React from 'react';
import Content from './Content';
import Navigation from './Navigation';

export default function Layout(props) {
  const [hover, setHover] = React.useState(false);
  return (
    <div className="parent">
      <Navigation hover={hover} setHover={setHover} />
      <Content hover={hover}>{props.children}</Content>
    </div>
  );
}
