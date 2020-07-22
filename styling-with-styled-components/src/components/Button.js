import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
const colorStyles = css`
  /*색상*/
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;
const sizeStyles = css`
${(props) =>
  props.size === 'large' &&
  css`
    height: 3rem;
    font-size: 1.25rem;
  `}
    ${(props) =>
      props.size === 'medium' &&
      css`
        height: 2rem;
        font-size: 1rem;
      `}
    ${(props) =>
      props.size === 'small' &&
      css`
        height: 1.75rem;
        font-size: 0.8rem;
      `}`;

const StyledButton = styled.button`
  /*공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  /*크기 */
  ${sizeStyles}
  ${colorStyles}
  /*기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.5rem',
    fontSize: '0.8rem',
  },
};
function Button({ children, color, size, ...rest }) {
  return (
    <StyledButton color={color} size={size} {...rest}>
      {children}
    </StyledButton>
  );
}
Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};
export default Button;
