import {
  css,
  ThemedCssFunction,
  FlattenSimpleInterpolation,
} from 'styled-components';

import THEME from '../config';

interface layout {
  mobile: object;
  mobileLarge: object;
  tablet: object;
  desktop: object;
  desktopLarge: object;
}

export default (Object.keys(THEME.layout) as any).reduce(
  (accumulator: any, breakpoint: keyof layout): layout => {
    accumulator[breakpoint] = (
      styles: FlattenSimpleInterpolation,
    ): FlattenSimpleInterpolation => css`
      @media screen and (max-width: ${THEME.layout[breakpoint].breakpoint -
          1}px) {
        ${styles}
      }
    `;

    return accumulator;
  },
  {} as { [key in keyof typeof THEME.layout]: ThemedCssFunction<layout> },
);
