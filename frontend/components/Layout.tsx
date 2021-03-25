import React from 'react';
import Meta from './Meta';
import Header from 'components/Header';

const Layout:React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header></Header>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
