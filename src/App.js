import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Layout from './Components/Layout/Layout';
import Map from './Components/Map/Map';
import Table from './Components/Table/Table';
import Chart from './Components/Chart/Chart';
import store from './redux/store';
import './Style.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/map" exact component={Map} />
            <Route path="/table" exact component={Table} />
            <Route path="/chart" component={Chart} />
            <Redirect from="/*" to="/table" exact />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
