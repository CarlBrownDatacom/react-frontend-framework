import React, { useState, useEffect } from 'react'; // importing FunctionComponent
import { StyledButton } from './index.style';

interface ButtonProps {
  children: React.ReactChild;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  isPrimary = false,
  isSecondary = false,
  isTertiary = false,
  disabled = false,
}: ButtonProps): React.ReactElement => {
  const [temp, tempy] = useState(false);

  useEffect((): void => {
    if (temp) {
      tempy(true);
    }
  }, [temp]);

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
