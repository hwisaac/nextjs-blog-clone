import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <Link href='/'>
        <h1>My Blog</h1>
      </Link>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>about</Link>
        <Link href='/posts'>posts</Link>
        <Link href='/contact'>contact</Link>
      </nav>
    </header>
  );
}
