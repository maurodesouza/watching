import {
  FormEvent,
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useState,
} from 'react';

import * as S from './styles';

type RangeInputProps = InputHTMLAttributes<HTMLInputElement>;

export type RangeInputRef = {
  setValue: (value: number) => void;
};

const RangeInput: React.ForwardRefRenderFunction<
  RangeInputRef,
  RangeInputProps
> = ({ defaultValue = 0, className, onInput, ...props }, ref) => {
  const [percentage, setPercentage] = useState(+defaultValue);
  const [value, setValue] = useState(+defaultValue);

  const calculatePercentage = (value: number) => {
    const { min = 0, max = 0 } = props;
    const result = ((+value - +min) * 100) / (+max - +min);

    setPercentage(result);
  };

  const handleChangeInputValue = (value: number) => {
    calculatePercentage(+value);
    setValue(+value);
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const { value = 0 } = event.target as HTMLInputElement;

    handleChangeInputValue(+value);

    onInput && onInput(event);
  };

  useImperativeHandle(ref, () => ({
    setValue: handleChangeInputValue,
  }));

  return (
    <S.Container
      percentage={percentage}
      type="range"
      defaultValue={defaultValue}
      className={className}
      value={value}
      {...props}
      onInput={handleInput}
    />
  );
};

const FowardRangeInput = forwardRef(RangeInput);
export { FowardRangeInput as RangeInput };
