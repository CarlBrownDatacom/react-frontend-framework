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
  (fromAccumulator: any, fromName: keyof layout) => {
    const from: any = fromAccumulator;

    from[fromName] = (Object.keys(THEME.layout) as any).reduce(
      (toAccumulator: any, toName: keyof layout) => {
        const to: any = toAccumulator;

        const minWidth: string = `(min-width: ${
          THEME.layout[fromName].breakpoint
        }px)`;
        const maxWidth: string = `(max-width: ${THEME.layout[toName]
          .breakpoint - 1}px)`;

        to[toName] = (
          styles: FlattenSimpleInterpolation,
        ): FlattenSimpleInterpolation => css`
      @media screen and ${minWidth} and ${maxWidth} {
        ${styles}
      }
    `;

        return to;
      },
      {} as FlattenSimpleInterpolation,
    );

    return from;
  },
  {} as { [key in keyof typeof THEME.layout]: ThemedCssFunction<layout> },
);
