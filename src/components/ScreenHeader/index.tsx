import React from 'react';

import { Header, Title } from './styles';

type ScreenHeaderProps = {
  title: string;
  enableGoBackArrow?: boolean;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, enableGoBackArrow }) => {
  return (
    <Header>
      <Title>{title}</Title>
    </Header>
  );
}

export default ScreenHeader;