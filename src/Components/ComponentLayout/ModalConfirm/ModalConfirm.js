import React from 'react';
import {Modal, ModalBody, Button} from 'reactstrap';
import Icon from './Icons/index';

export default function ModalConfirm({
  modalOpen = false,
  content = 'Are you sure want to continue?',
  confirm = () => {},
  confirmTxt = 'Ya',
  close = () => {},
  closeTxt = 'Tidak',
  useOneBtn = false,
  icon = 'info',
  title = 'Warning!',
}) {
  const [openThis, setThisOpen] = React.useState(false);

  React.useEffect(() => {
    setThisOpen(modalOpen);
  }, [modalOpen]);

  const doConfirm = (e) => {
    e.preventDefault();
    confirm();
    setThisOpen(false);
  };

  const doCancel = (e) => {
    e.preventDefault();
    close();
    setThisOpen(false);
  };

  return (
    <Modal className="kumbh-sans" isOpen={openThis}>
      <ModalBody>
        <div className="text-center my-3">
          <div className="py-2">
            <Icon icon={icon} />
          </div>
        </div>
        <div className="text-center my-3">
          <span className="font-weight-bold h5">{title}</span>
        </div>
        <div className="text-center">
          <span>{content}</span>
        </div>
        <div className="d-flex my-3 justify-content-around">
          <Button
            color={useOneBtn && icon === 'error' ? 'danger' : 'pap-main'}
            outline
            onClick={(e) => doConfirm(e)}
            className="rounded-pill px-4 border-0"
          >
            <span className="border-bottom">{confirmTxt}</span>
          </Button>
          {useOneBtn ? null : (
            <Button
              color="danger"
              outline
              onClick={(e) => doCancel(e)}
              className="rounded-pill px-4 border-0"
            >
              <span className="border-bottom">{closeTxt}</span>
            </Button>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
}
