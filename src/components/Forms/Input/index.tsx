import React from 'react';
import { Control, ErrorOption, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Container, Error } from './styles';


interface InputProps extends TextInputProps {
  control: Control<any>;
  name: string;
  error?: ErrorOption;
}

const Input: React.FC<InputProps> = ({ control, name, error, ...rest }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return (
    <>
      {error && (
        <Error>{error.message}</Error>
      )}
      <Container {...rest} value={value} onChangeText={onChange} hasError={!!error} />
    </>
  );
};

export default Input;
