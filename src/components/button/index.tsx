import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};

export { Button };
