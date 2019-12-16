import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { WithRouterInterface } from '../../interfaces/interfaces';

const ScrollToTop: React.FC<WithRouterInterface> = ({ history, children }) => {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, [history]);

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
