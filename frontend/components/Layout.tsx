import React from 'react';
import Meta from './Meta';
import Header from 'components/Header/Header';

const Layout:React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header/>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
