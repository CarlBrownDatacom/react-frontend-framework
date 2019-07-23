import React, { FunctionComponent, useContext, useState } from 'react'; // importing FunctionComponent
import { StyledButton } from './index.style';
import { ThemeContext } from 'styled-components';

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
  const [specialColors, setSpecialColors] = useState({});
  const themeContext = useContext(ThemeContext);

  console.log(themeContext);
  console.log(specialColors);
  console.log({ ...themeContext, ...specialColors });

  return (
    <StyledButton
      theme={{
        ...themeContext,
        ...specialColors,
      }}
      onClick={e => {
        setSpecialColors({
          specialColors: { ...themeContext.colors, primaryColor: 'green' },
        });
      }}
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
