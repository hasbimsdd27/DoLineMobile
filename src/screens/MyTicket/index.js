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

const MyTicket = ({navigation}) => {
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
        <ScrollView style={{width: '100%'}}>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
            style={{width: '100%', marginBottom: 5}}>
            <View style={styles.ticket}>
              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: '#3498db'}}>
                  Tiket 1
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    borderRadius: 5,
                    padding: 2,
                    backgroundColor: '#27ae60',
                    color: '#fff',
                  }}>
                  Paid
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Berangkat
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Tiba
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'center',
                  }}>
                  <Text>QrCOde Here</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
            style={{width: '100%', marginBottom: 5, marginTop: 5}}>
            <View style={styles.ticket}>
              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: '#3498db'}}>
                  Tiket 1
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    borderRadius: 5,
                    padding: 2,
                    backgroundColor: '#27ae60',
                    color: '#fff',
                  }}>
                  Paid
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Berangkat
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Tiba
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'center',
                  }}>
                  <Text>QrCOde Here</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
            style={{width: '100%', marginBottom: 5, marginTop: 5}}>
            <View style={styles.ticket}>
              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: '#3498db'}}>
                  Tiket 1
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    borderRadius: 5,
                    padding: 2,
                    backgroundColor: '#27ae60',
                    color: '#fff',
                  }}>
                  Paid
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Berangkat
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Tiba
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'center',
                  }}>
                  <Text>QrCOde Here</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
            style={{width: '100%', marginBottom: 5, marginTop: 5}}>
            <View style={styles.ticket}>
              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: '#3498db'}}>
                  Tiket 1
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    borderRadius: 5,
                    padding: 2,
                    backgroundColor: '#27ae60',
                    color: '#fff',
                  }}>
                  Paid
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Berangkat
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Tiba
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'center',
                  }}>
                  <Text>QrCOde Here</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              null;
            }}
            style={{width: '100%', marginBottom: 5, marginTop: 5}}>
            <View style={styles.ticket}>
              <View
                style={{
                  flex: 0.2,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: '#3498db'}}>
                  Tiket 1
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    borderRadius: 5,
                    padding: 2,
                    backgroundColor: '#27ae60',
                    color: '#fff',
                  }}>
                  Paid
                </Text>
              </View>

              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Berangkat
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', marginBottom: 5}}>
                    Tiba
                  </Text>
                  <Text>Gambir</Text>
                  <Text>19.00</Text>
                  <Text>17-03-2020</Text>
                </View>
                <View
                  style={{
                    flex: 1,

                    alignItems: 'center',
                  }}>
                  <Text>QrCOde Here</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
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

export default MyTicket;
