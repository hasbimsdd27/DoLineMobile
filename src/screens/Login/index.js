import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  Picker,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {TextInput} from 'react-native-gesture-handler';
const Landing = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.tittle}>Login</Text>
        <View
          style={{
            width: '60%',
            alignContent: 'center',
            justifyContent: 'center',
            marginLeft: '20%',
          }}>
          <TextInput placeholder="Email" style={styles.inputText} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.inputText}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate();
          }}
          style={{alignItems: 'center'}}>
          <View style={styles.button}>
            <Text style={{color: 'white'}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
