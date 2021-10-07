import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Layout from './Components/Layout/Layout';
import Map from './Components/Map/Map';
import Table from './Components/Table/Table';
import Chart from './Components/Chart/Chart';
import store from './redux/store';
import './Style.scss';
import _NotFound from './Components/Layout/Content/NotFound';
import Login from './Components/Auth/Login';
import actions from './redux/actions';
import ModalConfirm from './Components/ComponentLayout/ModalConfirm/ModalConfirm';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

function Main() {
  const dispatch = useDispatch();
  const {isSessionEnd, message} = useSelector((state) => state.auth);
  const [openNotif, setOpenNotif] = React.useState(false);

  const sessionNotifProps = {
    icon: 'info',
    title: 'Info',
    content: message,
    useOneBtn: true,
    confirm: () => {
      setOpenNotif(false);
      dispatch(actions.auth.clearState());
    },
    confirmTxt: 'Close',
  };

  React.useEffect(() => {
    dispatch(actions.auth.setInitial());
  }, []);

  React.useEffect(() => {
    if (isSessionEnd) {
      setOpenNotif(true);
    }
  }, [isSessionEnd]);

  return (
    <BrowserRouter>
      <ModalConfirm {...sessionNotifProps} modalOpen={openNotif} />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layout>
          <Route path="/map" exact component={Map} />
          <Route path="/table" exact component={Table} />
          <Route path="/chart" component={Chart} />
          <Redirect from="/" to="/table" exact />
          {/* <Route from="/*" component={NotFound} /> */}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
