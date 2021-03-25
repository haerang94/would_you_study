import React from 'react';
import Link from 'next/link';
import {Container,LinkBox} from 'components/Header/HeaderStyle';
const Header = () => {
  return (
    <Container>
    <ul>
      <LinkBox>
        <Link href="/">HOME</Link>
        <Link href="/login">LOG IN</Link>
        <Link href="/about">우쥬스터디란?</Link>
        <Link href="/contact">CONTACT US</Link>
      </LinkBox>
    </ul>
  </Container>
  );
};

export default Header;
