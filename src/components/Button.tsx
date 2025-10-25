import styled, { css } from "styled-components";

interface ButtonProps {
  theme?: "dark" | "light";
  shape?: "primary" | "circle";
}

export const Button = styled.button<ButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s ease;
  width: fit-content;

  ${({ theme }) => {
    switch (theme) {
      case "light":
        return css`
          background: #ffffff;
          color: #000000;
        `;
      default:
        return css`
          background: #000000;
          color: #ffffff;
        `;
    }
  }}

  ${({ shape }) => {
    switch (shape) {
      case "circle":
        return css`
          border-radius: 50%;
          height: 50px;
          width: 50px;
        `;
      default:
        return css`
          border-radius: 10px;
          height: 36px;
          padding: 8px 20px;
        `;
    }
  }}

  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
