import styled, { css } from 'styled-components';
import { darken } from 'polished';
import ButtonReset from '../inputResets/buttonReset';

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
      color: ${buttonProps.theme.colors.primaryColor};
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

      &:hover {
        cursor: pointer;
        background-color: ${darken(0.2, buttonProps.theme.colors.errorColor)}});
      }
    `}
`;
