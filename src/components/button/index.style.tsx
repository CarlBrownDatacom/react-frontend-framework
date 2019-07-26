import styled, { css, SimpleInterpolation } from 'styled-components';
import { darken } from 'polished';
import ButtonReset from '../inputResets/buttonReset';
import DefaultTheme from '../../assets/styles/config';

import { above, below, between } from '../../assets/styles/media';

interface ButtonStyleProps {
  disabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
}

export const StyledButton = styled(ButtonReset)<ButtonStyleProps>`
  ${(props): SimpleInterpolation =>
    props.isPrimary &&
    css`
      height: ${props.theme.button.height};
      padding: 0 ${props.theme.button.padding};
      border-radius: ${props.theme.button.borderRadius};
      font-size: ${props.theme.button.fontSize};
      font-weight: ${props.theme.button.fontWeight};
      color: ${props.theme.colors.primaryColor};
      background-color: ${props.theme.colors.primaryBackgroundColor};

      &:hover {
        cursor: pointer;
        background-color: ${darken(0.2, props.theme.colors.primaryBackgroundColor)}});
      }
    `}

  ${(props): SimpleInterpolation =>
    props.isSecondary &&
    css`
      height: ${props.theme.button.height};
      padding: 0 ${props.theme.button.padding};
      border-radius: ${props.theme.button.borderRadius};
      font-size: ${props.theme.button.fontSize};
      font-weight: ${props.theme.button.fontWeight};
      color: ${props.theme.colors.primaryBackgroundColor};
      background-color: ${props.theme.colors.primaryColor};

      ${above.tablet(css`
        color: yellow;
      `)}

      ${below.tablet(css`
        color: orange;
        background-color: green;
      `)}

      ${between.tablet.desktop(css`
        background-color: purple;
        color: green;
      `)}

      &:hover {
        cursor: pointer;
        background-color: ${darken(0.2, props.theme.colors.errorColor)}});
      }
    `}
`;

StyledButton.defaultProps = {
  theme: DefaultTheme,
};

export const temp = 'temp';
