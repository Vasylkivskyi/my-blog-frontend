import React from 'react';
import './nav.scss';
import { Link, withRouter } from 'react-router-dom';
import Menu from '../menu/Menu';
import Info from '../info/Info';
import Share from '../share/Share';

import { WithRouterInterface } from '../../interfaces/interfaces';

const Nav: React.FC<WithRouterInterface> = ({ location }) => {
  const cssClass = location.pathname.length > 1 ? 'without-info' : '';
  return (
    <nav className={`navbar ${cssClass}`}>
      <div className="space-between">
        <div className="title">
          <Menu />
          <Link to="/">
            <h1 className="site-name">Inside the flow</h1>
          </Link>
        </div>
        {!(location.pathname !== '/register'
        || location.pathname !== '/admin') && <Share />}
      </div>
      {location.pathname.length === 1 && <Info />}
    </nav>
  );
};

export default withRouter(Nav);
