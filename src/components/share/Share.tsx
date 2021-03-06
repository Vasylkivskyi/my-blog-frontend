import React, { useState } from 'react';
import './share.scss';
import { withRouter } from 'react-router-dom';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import { IoMdShareAlt } from 'react-icons/io';
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
          <FaTwitter className="social facebook" />
        </a>
        <a
          className="social-links"
          href={facebookLink}
        >
          <FaFacebook className="social" />
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
        <IoMdShareAlt className="share-button" />
      </div>
      <Modal isShoving={show} toggleModal={toggleModal}>
        { renderModalContent()}
      </Modal>
    </div>
  );
};

export default withRouter(Share);
