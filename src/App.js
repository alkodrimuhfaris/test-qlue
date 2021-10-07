import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Layout from './Components/Layout/Layout';
import store from './redux/store';
import './Style.scss';
import actions from './redux/actions';
import ModalConfirm from './Components/ComponentLayout/ModalConfirm/ModalConfirm';
import useConfig from './Components/Config/useConfig';
import Switcher from './Components/Switcher';

function Main() {
  const dispatch = useDispatch();
  const {isLoggedIn, isSessionEnd, message} = useSelector(
    (state) => state.auth,
  );

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
        <Switcher config={config} isLoggedIn={isLoggedIn} />
      </Layout>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
