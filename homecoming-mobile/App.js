import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './sites/Login/Login'
import Map from './sites/Map/Map'
import Profile from './sites/Profile/Profile'
import Nav from './components/Nav/Nav'
import Tracking from './sites/Tracking/Tracking'
import Register from './sites/Register/Register'
import TrustedProfiles from './sites/TrustedProfiles/TrustedProfiles'



const Stack = createNativeStackNavigator();

export default function App() {





  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tracking" component={Tracking} />
        <Stack.Screen name="Map" component={Map}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TrustedProfiles" component={TrustedProfiles} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
