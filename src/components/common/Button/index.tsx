import React from 'react';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';

interface ButtonStyleProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundcolor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
}

interface ButtonProps extends ButtonStyleProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick, ...rest }: ButtonProps) => {
  return (
    <Wrapper onClick={onClick} {...rest}>
      {text}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<ButtonStyleProps>`
  width: ${({ width }) => width ?? '98px'};
  height: ${({ height }) => height ?? '35px'};

  color: ${({ color }) => color ?? 'black'};

  border: 1px solid ${({ color }) => color ?? theme.colors.gray};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0'};

  background-color: ${({ backgroundcolor }) =>
    backgroundcolor ? backgroundcolor : 'none'};
  font-weight: ${({ fontWeight }) => fontWeight ?? '400'};
  font-size: ${({ fontSize }) => fontSize ?? '16px'};
  cursor: pointer;
`;
