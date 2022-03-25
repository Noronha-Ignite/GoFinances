import React from 'react';
import { TouchableOpacity } from 'react-native';
import HighlightCard from '../../components/HighlightCard';

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
  HighlightCards
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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}

export default Dashboard;