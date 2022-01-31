import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children }) {
  return (
    <>
      <Header />
      <p>I am the Page component!</p>
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
