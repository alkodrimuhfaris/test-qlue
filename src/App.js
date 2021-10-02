import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Main from './Components/Main';
import store from './redux/store';
import './Style.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Redirect from="/*" to="/" exact />
          <Route path="/get/:id" exact component={Main} />
          <Route path="/my-collections" component={Main} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
