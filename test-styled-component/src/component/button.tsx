import React, { FC } from "react";
import styled, { CSSObject } from "styled-components";
const mainColor = "#7361d4";

interface Props {
  title: string;
  onClick: () => void;
  backgroundColor?: string;
  className?: string;
  style?: CSSObject;
}

const Button: FC<Props> = ({
  title,
  onClick,
  backgroundColor,
  style,
  className,
}) => {
  return (
    <ButtonWrapper
      style={style}
      className={className}
      onClick={onClick}
      backgroundColor={backgroundColor}
    >
      {title}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ backgroundColor?: string }>`
  width: 134px;
  height: 46px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : mainColor};
transition: box - shadow 0.3s;

cursor: pointer;
  &: hover {
  box - shadow: 2px 4px 10px rgba(0, 0, 0, 0.25);
}
`;
