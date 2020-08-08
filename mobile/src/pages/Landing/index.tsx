import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import styles from './styles';

import landingImg from "../../assets/images/landing.png";
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';

function Landing () {
  const { navigate } = useNavigation();

  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data;
      setConnections(total);
    })
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>  
      <Image style={styles.banner} source={landingImg}/>

      <Text style={styles.title}>
        Seja Bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>

        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >

          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>

        </RectButton>

        <RectButton 
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >

          <Image source={giveClassesIcon} style={styles.imgButtonSecondary} />
          <Text style={styles.buttonText}>Dar Aula</Text>

        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {connections} conexões já realizadas {' '}
        <Image source={HeartIcon} />
      </Text>
    </View>
  );
}

export default Landing;