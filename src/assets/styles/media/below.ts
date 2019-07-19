import { css, ThemedCssFunction } from 'styled-components';

import THEME from '../config';

interface layout {
  mobile: object;
  mobileLarge: object;
  tablet: object;
  desktop: object;
  desktopLarge: object;
}

export default (Object.keys(
  THEME.layout,
) as (keyof typeof THEME.layout)[]).reduce(
  (accumulator, breakpoint) => {
    accumulator[breakpoint] = (styles: any) => css`
      @media screen and (max-width: ${THEME.layout[breakpoint].breakpoint -
          1}px) {
        ${styles}
      }
    `;

    return accumulator;
  },
  {} as { [key in keyof typeof THEME.layout]: ThemedCssFunction<layout> },
);
