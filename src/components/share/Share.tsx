import React, { useState } from 'react';
import './share.scss';
import { withRouter } from 'react-router-dom';
import share from '../../images/share.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import close from '../../images/close.svg';
import { URL } from '../../constants/routes';
import { deslugify } from '../../Utils/RoutesHelper';


import { WithRouterInterface } from '../../interfaces/interfaces';

const Share: React.FC<WithRouterInterface> = ({ location }) => {
  const [compState, setCompState] = useState({
    show: false,
  });

  const { show } = compState;

  const showModal = () => {
    const modal = document.getElementById('modal');
    setCompState({ show: true });
    if (modal) {
      modal.classList.remove('hide');

      modal.classList.add('show');
    }
    console.log(modal?.classList, 'show');
  };

  const hideModal = () => {
    const modal = document.getElementById('modal');
    setCompState({ show: false });
    if (modal) {
      modal.classList.remove('show');
      modal.classList.add('hide');
    }
    console.log(modal);
  };

  const url = `${URL}${location.pathname}`;
  const description = location.pathname.length > 1
    ? deslugify(location.pathname.slice(1))
    : 'Personal blog by Pavlo Vasylkivskyi';
  const facebookLink = `https://www.facebook.com/sharer.php?u=${url}`;
  const twitterLink = encodeURI(`https://twitter.com/intent/tweet?url=${url}&text=${description}`);


  const renderModal = () => (
    <div className="modal" id="modal">
      <div className="share-window">
        <img
          className="close remove-outline"
          src={close}
          alt="close icon"
          onClick={() => hideModal()}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          tabIndex={0}
        />
        <h3>{description}</h3>
      Share this via
        <div className="share-icons">
          <a className="social-links" href={twitterLink}>
            <img className="social" src={twitter} alt="twitter icon" />
          </a>
          <a
            className="social-links"
            href={facebookLink}
          >
            <img className="social" src={facebook} alt="facebook icon" />
          </a>
        </div>
      </div>
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

  return (
    <div className="share-container remove-outline">
      <div
        className="border"
        onClick={() => showModal()}
        role="button"
        tabIndex={0}
      >
        Share
        <img className="share-button" src={share} alt="share button" />
      </div>

      { renderModal()}

    </div>
  );
};

export default withRouter(Share);
