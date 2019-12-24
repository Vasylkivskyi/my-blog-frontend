/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import close from '../../images/close.svg';
import './modal.scss';

interface ModalInterface {
  isShoving: boolean;
  toggleModal: Function;
}


const Modal: React.FC<ModalInterface> = (props) => {
  const { children, isShoving, toggleModal } = props;

  const classCss = isShoving ? 'showIII' : '';

  return (
    isShoving ? (
      <div className={`modal ${classCss}`} id="modal">
        <div className="content-window">
          <img
            className="close remove-outline"
            src={close}
            alt="close icon"
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
