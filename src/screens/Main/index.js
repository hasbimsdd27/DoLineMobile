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
        <View style={styles.mainContentView}>
          <View
            style={{
              flex: 5,
              borderWidth: 2,
              padding: 2,
              borderColor: '#3498db',
              borderRadius: 20,
            }}>
            <Text style={styles.mainContentTitle}>Search Train</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5,
              }}>
              <View style={{flex: 1, margin: 5}}>
                <Text style={styles.textSubContent}>Origin</Text>
                <Picker style={styles.picker}>
                  <Picker.Item label="Gambir" value="1" />
                  <Picker.Item label="Surabaya Pasar Turi" value="2" />
                </Picker>
              </View>
              <View style={{flex: 1, margin: 5}}>
                <Text style={styles.textSubContent}>Destination</Text>
                <Picker style={styles.picker}>
                  <Picker.Item label="Gambir" value="1" />
                  <Picker.Item label="Surabaya Pasar Turi" value="2" />
                </Picker>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 5,
                marginBottom: 10,
              }}>
              <View
                style={{
                  flex: 1,
                  margin: 5,
                  alignItems: 'center',
                }}>
                <Text style={styles.mainContentTitle}>Departure Date</Text>
                <DatePicker
                  style={{width: '75%', marginTop: 5}}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                  onDateChange={date => {
                    console.log(date);
                  }}
                />
              </View>
            </View>
            <Text style={styles.mainContentTitle}>Passanger</Text>
            <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
              <View style={{flex: 1, margin: 5}}>
                <Text style={styles.textSubContent}>Adult</Text>
                <Picker style={styles.picker}>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                </Picker>
              </View>
              <View style={{flex: 1, margin: 5}}>
                <Text style={styles.textSubContent}>Infant</Text>
                <Picker style={styles.picker}>
                  <Picker.Item label="0" value="0" />
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                null;
              }}
              style={styles.buttonSearch}>
              <View style={styles.button}>
                <Text style={{color: 'white'}}>
                  <Icon name="search" size={20} color="white" /> Search
                </Text>
              </View>
            </TouchableOpacity>
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
