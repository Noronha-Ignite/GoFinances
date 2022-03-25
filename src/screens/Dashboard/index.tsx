import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  Avatar,
  Container,
  User,
  UserGreeting,
  UserName,
  Header,
  ProfileInfo,
  UserWrapper,
  LogoutIcon
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
            <LogoutIcon name='power'/>
          </TouchableOpacity>
        </UserWrapper>
      </Header>
    </Container>
  );
}

export default Dashboard;