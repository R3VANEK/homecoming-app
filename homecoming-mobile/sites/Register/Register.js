import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Nav from '../../components/Nav/Nav'

const Register = () => {

  let cos = 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




  return (
    <SafeAreaView>
        
      <Text>Register site!</Text>


      <Nav/>



    </SafeAreaView>
  );
}



export default Register