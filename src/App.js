import React from 'react';
import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Layout from './Components/Layout/Layout';
import store from './redux/store';
import './Style.scss';
import NotFound from './Components/Layout/Content/NotFound';
import Login from './Components/Auth/Login';
import actions from './redux/actions';
import ModalConfirm from './Components/ComponentLayout/ModalConfirm/ModalConfirm';
import useConfig from './Components/Config/useConfig';
import PrivateRoute from './Components/Auth/PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

function Main() {
  const dispatch = useDispatch();
  const {isLoggedIn, isSessionEnd, message} = useSelector(
    (state) => state.auth,
  );
  // const lateLogin = localStorage.getItem('isLoggedIn') === 'true';
  // const [loggedIn, setLoggedIn] = React.useState(lateLogin);
  // const firstOpen = React.useRef(null);

  // React.useState(() => {
  //   if (firstOpen.current) {
  //     setLoggedIn(isLoggedIn);
  //   } else {
  //     firstOpen.current = true;
  //   }
  // }, [isLoggedIn]);

  const [openNotif, setOpenNotif] = React.useState(false);
  const config = useConfig();

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
      <Layout>
        <Switch>
          <Route path="/login" exact component={Login} />
          {config.map((val, idx) => {
            const {Component, route} = val;
            return (
              <PrivateRoute
                key={idx}
                isAuthenticated={isLoggedIn}
                path={route}
                exact
              >
                <Component />
              </PrivateRoute>
            );
          })}
          <Redirect
            from="/"
            to={{pathname: '/table', state: {isFromHome: true}}}
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
