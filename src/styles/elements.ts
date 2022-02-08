import { css } from "styled-components";

export const elements = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  * {
    font-family: "Encode Sans", sans-serif;
  }

  html {
    line-height: 1.5;
    font-size: var(--font-size-root);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
