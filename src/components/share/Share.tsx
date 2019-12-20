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

const Share: React.FC<WithRouterInterface> = (props) => {
  const [compState, setCompState] = useState({
    showModal: false,
  });

  const { location } = props;

  const { showModal } = compState;

  const modalToggle = () => {
    setCompState({
      showModal: !showModal,
    });
  };

  const url = `${URL}${location.pathname}`;
  const description = location.pathname.length > 1
    ? deslugify(location.pathname.slice(1))
    : 'Personal blog by Pavlo Vasylkivskyi';
  const facebookLink = `https://www.facebook.com/sharer.php?u=${url}`;
  const twitterLink = encodeURI(`https://twitter.com/intent/tweet?url=${url}&text=${description}`);

  const show = showModal ? 'show' : '';

  const renderModal = () => (
    <div className={`modal ${show}`}>
      <div className="share-window">
        <img
          className="close remove-outline"
          src={close}
          alt="close icon"
          onClick={() => modalToggle()}
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
      { showModal && (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <div
          className="curtain"
          onClick={modalToggle}
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
        onClick={() => modalToggle()}
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
