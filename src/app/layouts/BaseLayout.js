import React, { Fragment } from 'react';

import { Header } from '../components/layout'; 

const BaseLayout = ({children}) => (
  <Fragment>
    <Header />
    <main className="app-main">
      <div className="container">
      {children}
      </div>
    </main>
  </Fragment>
);
export default BaseLayout;