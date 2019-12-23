import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import close from '../../images/close.svg';
import { WithRouterInterface } from '../../interfaces/interfaces';


const Modal: React.FC<WithRouterInterface> = (props) => {
  const [compState, setCompState] = useState({
    show: false,
  });

  const { children } = props;
  const { show } = compState;

  const showModal = () => {
    const modal = document.getElementById('modal');
    setCompState({ show: true });
    if (modal) {
      modal.classList.remove('hide');

      modal.classList.add('show');
    }
  };

  const hideModal = () => {
    const modal = document.getElementById('modal');
    setCompState({ show: false });
    if (modal) {
      modal.classList.remove('show');
      modal.classList.add('hide');
    }
  };
  console.log();
  return (
    <div className="modal" id="modal">
      {children}
      { show && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <div
          className="curtain"
          onClick={hideModal}
          role="button"
          tabIndex={0}
        />
      )}
    </div>
  );
};

export default withRouter(Modal);
