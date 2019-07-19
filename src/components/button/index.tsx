import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import { StyledButton } from './index.style';

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  handleClick,
  isPrimary = false,
  isSecondary = false,
  isTertiary = false,
  disabled = false,
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      isPrimary={isPrimary}
      isSecondary={isSecondary}
      isTertiary={isTertiary}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
