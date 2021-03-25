import React from 'react';
import headerStyles from 'styles/Header.module.css';
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>webdev</span> news
      </h1>
      <p className={headerStyles.description}>Keep up to date with web dev</p>
    </div>
  );
};

export default Header;
