import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  isStock: boolean;
}
export default function Button({ children, isStock }: ButtonProps) {
  const StyledButton = styled.button<{ isStock: boolean }>`
    background-color: ${() => (isStock ? '#0bff0b' : '#F2F2F2')};
    padding: 10px 30px;
    border: none;
    color: ${() => (isStock ? 'white' : '#B3B3B3')};
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    margin-left: 10px;
  `;
  return <StyledButton>{children}</StyledButton>;
}
