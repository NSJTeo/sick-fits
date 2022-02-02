import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGray: #e1e1e1;
    --lightGrey: var(--lightGray);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    box-sizing: border-box;
  }
  body {
    font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    padding: 0;
    margin: 0;
    line-height: 2;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: var(--black);
    :hover {
      text-decoration: underline;
    }
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
