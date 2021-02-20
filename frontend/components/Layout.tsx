import React from 'react';
import Meta from './Meta';

<<<<<<< HEAD
const Layout:React.FC = ({ children }) => {
=======
type LayoutProps{
  children?:React.ReactNode
}

const Layout = ({ children }:LayoutProps) => {
>>>>>>> 68743b31e3c6e9d585947fbbfccbcf8898ad45b9
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
