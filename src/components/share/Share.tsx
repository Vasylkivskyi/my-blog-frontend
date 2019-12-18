import React, { useState, useEffect } from 'react';
import './share.scss';
import { Animated } from 'react-animated-css';
import share from '../../images/share.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import close from '../../images/close.svg';

const Share = () => {
  const [compState, setCompState] = useState({
    showModal: false,
  });

  const { showModal } = compState;

  const modalToggle = () => {
    setCompState({
      showModal: !showModal,
    });
  };

  const renderModal = () => (
    <div className="modal">
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
      Share this via
        <div className="share-icons">
          <a className="social-links" href="https://twitter.com/PVasylkivskyi">
            <img className="social" src={twitter} alt="twitter icon" />
          </a>
          <a
            className="social-links"
            href="https://www.facebook.com/pasha.vasylkivskiy"
          >
            <img className="social" src={facebook} alt="facebook icon" />
          </a>
        </div>

      </div>
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
      { showModal && (
        <div className="curtain" />
      )}
      <Animated
        animationIn="flipInX"
        animationOut="flipOutY"
        animationInDuration={1000}
        isVisible={showModal}
      >
        {renderModal()}
      </Animated>
    </div>
  );
};

export default Share;
