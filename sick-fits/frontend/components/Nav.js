import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/Products">Products</Link>
      <Link href="/Sell">Sell</Link>
      <Link href="/Orders">Orders</Link>
      <Link href="/Account">Account</Link>
      {/* <Link href="/Cart">Cart</Link> */}
    </NavStyles>
  );
}
