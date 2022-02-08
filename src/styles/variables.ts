import { css } from 'styled-components';

export const variables = css`
  :root {
    // Typography
    --font-family-sans: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    --font-family-serif: 'Merriweather', 'Georgia', Cambria, 'Times New Roman',
      Times, serif;
    --font-size-root: 18px;
    --font-size-sm: 0.8rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    --font-size-2x: 1.75rem;
    --font-size-3x: 2rem;
    --font-size-4x: 2.5rem;
    --font-size-5x: 3rem;

    // Container Width
    --max-width: 762px;

    // Spacing values
    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;
  }
`;
