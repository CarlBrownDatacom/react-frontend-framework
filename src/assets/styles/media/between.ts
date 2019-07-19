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
  (fromAccumulator, fromName) => {
    const from = fromAccumulator;

    from[fromName] = (Object.keys(
      THEME.layout,
    ) as (keyof typeof THEME.layout)[]).reduce(
      (toAccumulator, toName) => {
        const to = toAccumulator;

        const minWidth = `(min-width: ${THEME.layout[fromName].breakpoint}px)`;
        const maxWidth = `(max-width: ${THEME.layout[toName].breakpoint -
          1}px)`;

        to[toName] = (styles: any) => css`
      @media screen and ${minWidth} and ${maxWidth} {
        ${styles}
      }
    `;

        return to;
      },
      {} as any,
    );

    return from;
  },
  {} as { [key in keyof typeof THEME.layout]: ThemedCssFunction<layout> },
);
