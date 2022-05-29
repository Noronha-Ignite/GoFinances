import React from 'react';
import { Control, useController } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Container } from './styles';


interface InputProps extends TextInputProps {
  control: Control<any>;
  name: string;
}

const Input: React.FC<InputProps> = ({ control, name, ...rest }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  return <Container {...rest} value={value} onChangeText={onChange} />;
};

export default Input;
