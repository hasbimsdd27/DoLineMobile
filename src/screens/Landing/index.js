import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import subway from '../../assets/images/subway.png';

const Landing = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.landingImage} source={subway} />
        </View>
        <Text style={styles.tittle}>DO-Line</Text>
        <Text style={styles.subTittle}>Your Ticket Finder App</Text>

        <TouchableOpacity
          onPress={() => {
            navigate();
          }}
          style={{alignItems: 'center'}}>
          <View style={styles.button}>
            <Text style={{color: 'white'}}>Bring me in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
