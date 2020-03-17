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
    alignContent: 'center',
  },
  topBar: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    padding: 8,
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomBar: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  mainContent: {
    flex: 14,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#2c3e50',
  },
  button: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSearch: {
    width: '100%',
    height: 40,
    marginTop: 10,
    borderRadius: 200,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContentView: {
    flex: 2,
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  mainContentTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498db',
  },
  textSubContent: {
    textAlign: 'center',
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  picker: {
    color: '#2c3e50',
    width: '100%',
  },
  ticket: {
    width: '100%',
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    borderColor: '#3498db',
  },
});
export default styles;
