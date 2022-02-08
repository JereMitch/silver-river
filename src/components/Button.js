import React from 'react';
import '../components/styles/Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'charcoal'];

 export const MyButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn font ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

// export default MyButton;