import React from 'react';
import { TouchableOpacity } from 'react-native';
import HighlightCard from '../../components/HighlightCard';
import Transactions from '../../components/Transactions';

import {
  Avatar,
  Container,
  User,
  UserGreeting,
  UserName,
  Header,
  ProfileInfo,
  UserWrapper,
  LogoutIcon,
  HighlightCards,
  Content,
} from './styles';

const Dashboard: React.FC = () => {

  return (
    <Container>
      <Header>
        <UserWrapper>
          <ProfileInfo>
            <Avatar source={{ uri: 'https://github.com/Noronha1612.png' }} />
            <User>
              <UserGreeting>Olá, Bom dia</UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </ProfileInfo>

          <TouchableOpacity>
            <LogoutIcon />
          </TouchableOpacity>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
          type='income'
        />
        <HighlightCard
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 03 de abril'
          type='outcome'
        />
        <HighlightCard
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril'
          type='total'
        />
      </HighlightCards>

      <Content>
        <Transactions />
      </Content>
    </Container>
  );
}

export default Dashboard;