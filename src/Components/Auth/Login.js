import React from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/actions';
import FormLogin from './FormLogin';
import ModalConfirm from '../ComponentLayout/ModalConfirm/ModalConfirm';

export default function Login({
  location = {state: {from: '', forbidden: false}},
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {isLoggedIn, pending, succes, error, message} = useSelector(
    (state) => state.auth,
  );
  const [propsNotif, setPropsNotif] = React.useState({});
  const [openNotif, setOpenNotif] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setPropsNotif({
        title: 'Error!',
        icon: 'error',
        content: message,
        confirmTxt: 'close',
        useOneBtn: true,
        confirm: () => {
          dispatch(actions.auth.clearState());
          setOpenNotif(false);
        },
      });
      setOpenNotif(true);
    }
  }, [error]);

  React.useEffect(() => {
    const {state} = location;
    const path = state
      ? state.from
        ? state.from.pathname
        : '/table'
      : '/table';
    if (isLoggedIn) {
      history.push(path);
    }
  }, [isLoggedIn, succes, error]);

  React.useEffect(() => {
    const forbiden = location.state ? location.state.forbidden : false;
    if (forbiden) {
      setPropsNotif({
        title: 'Unauthorize',
        icon: 'error',
        content: 'Log In First',
        confirmTxt: 'close',
        useOneBtn: true,
        confirm: () => {
          location.forbidden = false;
          setOpenNotif(false);
        },
      });
      setOpenNotif(true);
    }
  }, [location]);

  const login = (value) => {
    dispatch(actions.auth.login(value));
  };

  return (
    <div className="login-page">
      <ModalConfirm {...propsNotif} modalOpen={openNotif} />
      <div className="login-container">
        {pending ? <div className="loading" /> : null}
        <FormLogin login={login} />
      </div>
    </div>
  );
}
