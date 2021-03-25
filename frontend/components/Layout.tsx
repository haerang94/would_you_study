import React from 'react';
import Meta from './Meta';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer'
const Layout:React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header/>
      <div>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
