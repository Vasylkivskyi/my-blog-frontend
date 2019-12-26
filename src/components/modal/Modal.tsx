/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './modal.scss';
import { GiCancel } from 'react-icons/gi';


interface ModalInterface {
  isShoving: boolean;
  toggleModal: Function;
}


const Modal: React.FC<ModalInterface> = (props) => {
  const { children, isShoving, toggleModal } = props;

  return (
    isShoving ? (
      <div className="modal" id="modal">
        <div className="content-window">
          <GiCancel
            className="close remove-outline"
            onClick={() => toggleModal()}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex={0}
          />
          {children}
        </div>
        <div
          className="curtain"
          onClick={() => toggleModal()}
          role="button"
          tabIndex={0}
        />
      </div>
    ) : null
  );
};

export default Modal;
