import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Main } from './src/components/Main';
import Auth from './src/contexts/Auth/auth';
// import './config/firebase';
import "./firebase";


const App = () => {
  
  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <Auth>
          <Main />
        </Auth>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
