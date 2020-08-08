import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

interface PageHeaderProps {
  title: string;
  headerFilterIcon?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerFilterIcon, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image
            source={backIcon}
            resizeMode="cover"
            style={styles.iconBack}
          />
        </BorderlessButton>

        <Image
          style={styles.iconLogo}
          source={logoImg}
          resizeMode="stretch"/>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerFilterIcon}
      </View>
      {children}
    </View>
  );
}

export default PageHeader;