import { FormEvent, InputHTMLAttributes, useState } from 'react';

import * as S from './styles';

type RangeInputProps = InputHTMLAttributes<HTMLInputElement>;

const RangeInput = ({
  defaultValue = 0,
  onInput,
  ...props
}: RangeInputProps) => {
  const [percentage, setPercentage] = useState(+defaultValue);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const { min = 0, max = 0 } = props;
    const { value = 0 } = event.target as HTMLInputElement;

    const result = ((+value - +min) * 100) / (+max - +min);
    setPercentage(result);

    onInput && onInput(event);
  };

  return (
    <S.Container
      percentage={percentage}
      type="range"
      defaultValue={defaultValue}
      {...props}
      onInput={handleInput}
    />
  );
};

export { RangeInput };
