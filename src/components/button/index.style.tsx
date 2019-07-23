import styled, { css } from 'styled-components';
import { darken } from 'polished';
import ButtonReset from '../inputResets/buttonReset';

import { above, below, between } from '../../assets/styles/media';

interface buttonStyleProps {
  disabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  theme: any;
}

export const StyledButton = styled(ButtonReset)`
  ${(buttonProps: buttonStyleProps) =>
    buttonProps.isPrimary &&
    css`
      height: ${buttonProps.theme.button.height};
      padding: 0 ${buttonProps.theme.button.padding};
      border-radius: ${buttonProps.theme.button.borderRadius};
      font-size: ${buttonProps.theme.button.fontSize};
      font-weight: ${buttonProps.theme.button.fontWeight};
      color: ${
        buttonProps.theme.specialColors
          ? buttonProps.theme.specialColors.primaryColor
          : buttonProps.theme.colors.primaryColor
      };
      background-color: ${buttonProps.theme.colors.primaryBackgroundColor};

      &:hover {
        cursor: pointer;
        background-color: ${darken(
          0.2,
          buttonProps.theme.colors.primaryBackgroundColor,
        )}});
      }
    `}

  ${(buttonProps: buttonStyleProps) =>
    buttonProps.isSecondary &&
    css`
      height: ${buttonProps.theme.button.height};
      padding: 0 ${buttonProps.theme.button.padding};
      border-radius: ${buttonProps.theme.button.borderRadius};
      font-size: ${buttonProps.theme.button.fontSize};
      font-weight: ${buttonProps.theme.button.fontWeight};
      color: ${buttonProps.theme.colors.primaryBackgroundColor};
      background-color: ${buttonProps.theme.colors.primaryColor};

      ${above.tablet(css`
        color: yellow;
      `)}

      ${below.tablet(css`
        color: orange;
        background-color: green;
      `)}

      ${between.tablet.desktop(css`
        background-color: purple;
      `)}

      &:hover {
        cursor: pointer;
        background-color: ${darken(0.2, buttonProps.theme.colors.errorColor)}});
      }
    `}
`;
