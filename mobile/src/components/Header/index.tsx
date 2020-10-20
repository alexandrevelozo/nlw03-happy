import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

interface HeadersProps {
  title: string;
  showCancel?: boolean;
}

const Header = ({ title, showCancel = true }: HeadersProps) => {
  const navigation = useNavigation()

  function handleGoBackToAppHomepage() {
    navigation.navigate('OrphanagesMap')
  }

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>

      <Title>{title}</Title>

      { showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomepage}>
        <Feather name="x" size={24} color="#ff669d" />
      </BorderlessButton>
      ) : (
        <View />
      ) }
    </Container>
  );
};

export default Header;


