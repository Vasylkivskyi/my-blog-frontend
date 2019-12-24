import React, { useState } from 'react';
import './share.scss';
import { withRouter } from 'react-router-dom';
import share from '../../images/share.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import { URL } from '../../constants/routes';
import { deslugify } from '../../Utils/RoutesHelper';
import Modal from '../modal/Modal';


import { WithRouterInterface } from '../../interfaces/interfaces';

const Share: React.FC<WithRouterInterface> = ({ location }) => {
  const [compState, setCompState] = useState({
    show: false,
  });

  const { show } = compState;

  const toggleModal = () => {
    setCompState({ show: !show });
  };

  const url = `${URL}${location.pathname}`;
  const description = location.pathname.length > 1
    ? deslugify(location.pathname.slice(1))
    : 'Personal blog by Pavlo Vasylkivskyi';
  const facebookLink = `https://www.facebook.com/sharer.php?u=${url}`;
  const twitterLink = encodeURI(`https://twitter.com/intent/tweet?url=${url}&text=${description}`);


  const renderModalContent = () => (
    <div className="share-window">
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
  );

  return (
    <div className="share-container remove-outline">
      <div
        className="border"
        onClick={() => toggleModal()}
        role="button"
        tabIndex={0}
      >
        Share
        <img className="share-button" src={share} alt="share button" />
      </div>
      <Modal isShoving={show} toggleModal={toggleModal}>
        { renderModalContent()}
      </Modal>
    </div>
  );
};

export default withRouter(Share);
