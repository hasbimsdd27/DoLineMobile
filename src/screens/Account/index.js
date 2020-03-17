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
  Picker,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';

const Main = ({navigation}) => {
  const navigate1 = () => {
    navigation.navigate('Main');
  };
  const navigate2 = () => {
    navigation.navigate('MyTicket');
  };
  const navigate3 = () => {
    navigation.navigate('Account');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>DO-Line</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.ticket}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 2,
                paddingLeft: 10,
                padding: 5,
              }}>
              <View style={{marginBottom: 5}}>
                <Text style={{fontWeight: 'bold'}}>Nama Lengkap</Text>
                <Text>Agus Suhartono</Text>
              </View>
              <View style={{marginBottom: 5}}>
                <Text style={{fontWeight: 'bold'}}>Email</Text>
                <Text>user@user123.com</Text>
              </View>
              <View style={{marginBottom: 5}}>
                <Text style={{fontWeight: 'bold'}}>No. Telepon</Text>
                <Text>081122334455</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,

                alignItems: 'center',
              }}>
              <Icon name="user" size={100} color="#3498db" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigate1();
            }}
            style={styles.button}>
            <View style={styles.button}>
              <Icon name="train" size={20} color="#3498db" />
              <Text style={{color: '#3498db'}}>Train</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigate2();
            }}
            style={styles.button}>
            <View style={styles.button}>
              <Icon name="ticket" size={20} color="#3498db" />
              <Text style={{color: '#3498db'}}>My Ticket</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigate3();
            }}
            style={styles.button}>
            <View style={styles.button}>
              <Icon name="user" size={20} color="#3498db" />
              <Text style={{color: '#3498db'}}>User</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Main;
