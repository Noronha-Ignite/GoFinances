import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles';

const Dashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Title>Dashboard da Aplicação</Title>
    </Container>
  );
}

export default Dashboard;