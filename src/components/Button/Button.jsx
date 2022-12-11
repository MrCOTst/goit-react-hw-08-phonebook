import { ButtonFilter } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <ButtonFilter
      style={
        selected === false
          ? { backgroundColor: ` #fff`, color: `#000` }
          : { backgroundColor: `#1976d2`, color: `#fff`}
      }
      type={type}
      {...otherProps}
    >
      {children}
    </ButtonFilter>
  );
};
