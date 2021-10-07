import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import actions from '../../../redux/actions';
import ModalConfirm from '../../ComponentLayout/ModalConfirm/ModalConfirm';

export default function ProfileWrapper({endHover}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {avatar, name} = useSelector((state) => state.auth);

  const [openLogout, setOpenLogout] = React.useState(false);
  const logoutProps = {
    icon: 'warning',
    title: 'Warning',
    content: 'Logout and end this session?',
    confirm: () => {
      setOpenLogout(false);
    },
    confirmTxt: 'Cancel',
    close: () => {
      dispatch(actions.auth.logout());
      setOpenLogout(false);
      history.push({
        pathname: '/login',
      });
    },
    closeTxt: 'logout',
  };

  const logout = (e) => {
    e.preventDefault();
    endHover();
    setOpenLogout(true);
  };

  return (
    <div className="profile">
      <ModalConfirm {...logoutProps} modalOpen={openLogout} />
      <img
        className="profile-pic"
        src={avatar || '/assets/images/placeholder.png'}
        alt="avatar"
      />
      <div className="profile-desc">
        <span className="name">{name || 'Admin'}</span>
        <button className="logout-btn" type="button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
