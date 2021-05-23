import { createGlobalStyle } from 'styled-components';

import OpenSansRegular from '../../assets/fonts/open-sans/open-sans-regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansRegular}) format("truetype");
    font-weight: 400;
    font-display: swap;

  }

  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Open Sans';
  }
`;

export default GlobalStyles;
