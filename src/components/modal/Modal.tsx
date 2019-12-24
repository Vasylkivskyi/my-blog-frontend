import React, { useState, useEffect } from 'react';
import close from '../../images/close.svg';
import './modal.scss';

interface ModalInterface {
  isShoving: boolean;
  toggleModal: Function;
}


const Modal: React.FC<ModalInterface> = (props) => {
  const { children, isShoving, toggleModal } = props;

  useEffect(() => {
    console.log('works');
  }, [isShoving]);

  useEffect(() => {
    console.log('gggg');
  }, []);

  const classCss = isShoving ? 'show' : '';

  return (
    <div className={`modal ${classCss}`}>
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
      { isShoving && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <div
          className="curtain"
          onClick={() => toggleModal()}
          role="button"
          tabIndex={0}
        />
      )}
    </div>
  );
};

export default Modal;
