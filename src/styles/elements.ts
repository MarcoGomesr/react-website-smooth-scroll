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

  body {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-md);
    color: var(--color-grey-800);
    background: var(--color-grey-50);
    transition: all 0.3s;
  }

  footer {
    padding: var(--spacing-6) var(--spacing-0);
  }

  hr {
    background: var(--color-grey-200);
    height: 1px;
    border: 0;
    margin: var(--spacing-10) var(--spacing-0) var(--spacing-5);
    display: block;
  }

  /** TYPOGRAPHY **/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // font-family: var(--font-family-sans);
    margin: var(--spacing-4) var(--spacing-0);
    line-height: 1.2;
    letter-spacing: -0.025em;
    color: var(--color-grey-900);
    transition: color 0.3s;

    a {
      color: inherit;
      text-decoration: none;
    }

    strong {
      color: var(--color-accent-600);
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-weight: 900;
    font-size: var(--font-size-4x);
  }

  h2 {
    font-size: var(--font-size-3x);
  }

  h3 {
    font-size: var(--font-size-2x);
  }

  h4 {
    font-size: var(--font-size-xl);
  }

  h5 {
    font-size: var(--font-size-lg);
  }

  h6 {
    font-size: var(--font-size-md);
  }

  p {
    line-height: 1.6;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
    padding: var(--spacing-0);
  }

  blockquote {
    color: var(--color-grey-700);
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-8);
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
    border-left: var(--spacing-1) solid var(--color-grey-700);
    font-size: var(--font-size-lg);
    font-style: italic;
    margin-bottom: var(--spacing-8);

    > :last-child {
      margin-bottom: var(--spacing-0);
    }

    > ul,
    > ol {
      list-style-position: inside;
    }
  }

  table {
    width: 100%;
    margin-bottom: var(--spacing-8);
    border-collapse: collapse;
    border-spacing: 0.25rem;

    thead tr th {
      border-bottom: 2px solid var(--color-grey-200);
    }

    tr {
      border-bottom: 1px solid var(--color-grey-100);
    }

    th,
    td {
      text-align: left;
      padding: var(--spacing-2) var(--spacing-0);
    }
  }

  figure {
    margin: var(--spacing-8) var(--spacing-0);

    a {
      background: none;
    }

    figcaption {
      font-size: var(--font-size-sm);
      font-style: italic;
      max-width: 590px;
      margin: var(--spacing-0) auto var(--spacing-0);
      text-align: center;
      color: var(--color-grey-700);
    }
  }

  img {
    max-width: 100%;
  }

  video {
    max-width: 100%;
  }

  form {
    input {
      padding: calc(var(--spacing-2) + 1px);
      border: 1px solid var(--color-grey-700);
    }

    a,
    button {
      padding: var(--spacing-2);
      background: var(--color-accent-700);
      border: 2px solid var(--color-accent-700);
      color: var(--color-grey-50);
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: var(--color-accent-600);
        border: 2px solid var(--color-accent-600);
      }
    }
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      color: #9aa5b1;
      opacity: 1;
    }
    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: #9aa5b1;
    }
    /* Microsoft Edge */
    ::-ms-input-placeholder {
      color: #9aa5b1;
    }
  }

  /** LINKS **/
  a {
    color: var(--color-grey-800);
    text-decoration: none;
    cursor: pointer;
    background: linear-gradient(
      transparent 0%,
      transparent calc(50% - 7px),
      var(--color-accent-200) calc(50% - 7px),
      var(--color-accent-200) 100%
    );
    background-size: 100% 200%;
    background-position: 0px 0px;
    word-break: break-word;
    transition: background-position 0.3s;

    &:hover,
    &:focus {
      background-position: 0px 100%;
    }
  }

  a,
  button,
  input,
  textarea {
    &:focus {
      outline-style: solid !important;
      outline-width: 3px !important;
      outline-color: var(--color-accent-300);
    }
  }

  .error,
  .draft {
    color: var(--color-error-400);
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
