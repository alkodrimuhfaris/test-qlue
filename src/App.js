import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './Components/Layout/Layout';
import Map from './Components/Map/Map';
import Table from './Components/Table/Table';
import Chart from './Components/Chart/Chart';
import store from './redux/store';
import './Style.scss';
import NotFound from './Components/Layout/NotFound';
import Login from './Components/Auth/Login';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Layout>
            <Route path="/map" exact component={Map} />
            <Route path="/table" exact component={Table} />
            <Route path="/chart" component={Chart} />
            <Redirect from="/" to="/table" exact />
            <Route component={NotFound} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
