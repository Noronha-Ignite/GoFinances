import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  Avatar,
  Container,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  ProfileInfo,
  LogoutIcon
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
}

export default Header;