import React from 'react';
import './nav.scss';
import { Link, withRouter } from 'react-router-dom';
import Info from '../info/Info';
import Share from '../share/Share';

import { WithRouterInterface } from '../../interfaces/interfaces';

const Nav: React.FC<WithRouterInterface> = ({ location }) => {
  const cssClass = location.pathname.length > 1 ? 'without-info' : '';
  console.log(location);
  return (
    <nav className={`navbar ${cssClass}`}>
      <div className="space-between">
        <Link to="/">
          <h1 className="site-name">Inside the flow</h1>
        </Link>
        {location.pathname !== '/register' && <Share />}
      </div>
      {location.pathname.length === 1 && <Info />}
    </nav>
  );
};

export default withRouter(Nav);
