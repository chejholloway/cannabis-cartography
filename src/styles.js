import { createGlobalStyle } from 'styled-components';
import palette from './constants/palette';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: proxima-nova, Helvetica, Roboto, Arial, sans-serif;
    overflow-y: scroll;
    background: ${palette.gray1};
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes growY {
    from { transform: scaleY(0) }
    to   { transform: scaleY(1) }
  }
`;
