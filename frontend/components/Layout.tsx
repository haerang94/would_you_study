import React from 'react';
import Meta from './Meta';

type LayoutProps{
  children?:React.ReactNode
}

const Layout = ({ children }:LayoutProps) => {
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
