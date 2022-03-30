import React from 'react';

import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';

import {
  Container,
  Header,
  Title,
  Form
} from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input
          placeholder='Nome'
          style={{ marginBottom: 8 }}
        />
        <Input
          placeholder='Preço'
          style={{ marginBottom: 8 }}
        />

        <Button>Enviar</Button>
      </Form>
    </Container>
  );
}

export default Register;