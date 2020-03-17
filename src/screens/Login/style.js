import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 5,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '100%',
    height: 300,
    alignContent: 'center',
    justifyContent: 'center',
  },
  landingImage: {
    width: 300,
    height: 300,
  },
  tittle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 30,
  },
  subTittle: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    color: '#3498db',
  },
  button: {
    marginTop: 50,
    width: '60%',
    height: 50,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
  },
  inputText: {
    borderBottomColor: '#3498db',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
});
export default styles;
