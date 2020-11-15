import React, { Fragment } from 'react';

const BaseLayout = ({children}) => (
  <Fragment>
    <main className="app-main">
      <div className="container">
      {children}
      </div>
    </main>
  </Fragment>
);
export default BaseLayout;