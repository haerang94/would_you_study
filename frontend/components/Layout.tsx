import React from 'react';
import Meta from './Meta';

const Layout:React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
