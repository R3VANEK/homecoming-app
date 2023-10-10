import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableHighlight, Image, Button, TextInput} from 'react-native';

import Nav from '../../components/Nav/Nav'

import JohnDoe from '../../assets/icons/doe.jpg'



const Profile = ({navigation}) => {

  const [Email_text, setEmail_text] = useState('Email');  
  const [Name_text, setName_text] = useState('Name');  
  const [Password_text, setPassword_text] = useState('Password');  

  const styles = StyleSheet.create({
    siteContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100%'
    },
    contentContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      height:'80%'
    },
    circle:{
      height:40,
      width:40,
      borderRadius:44/2,
      backgroundColor:'red'
    },


    profilePicture:{
      marginTop:800
    },

    btn:{ 
      alignItems:'center',
      marginTop:60
    },
    input: {
      backgroundColor : '#F6F6F6',
      alignItems:'center',
      justifyContent:'center',
      padding : 5,
      width:300,
      justifyContent:'center',
      marginTop:30
    }

  });
  



  return (
    <SafeAreaView style={styles.siteContainer}>

      <View
        style = {{
          borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
          width: Dimensions.get('window').width * 1,
          height: Dimensions.get('window').width * 1,
          backgroundColor:'#190C50', //#190C50
          marginTop:-400,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        underlayColor = '#ccc'
       
      ></View>

          {/* <Image source={require('../../assets/icons/profile.png')} style={styles.profilePicture}/> */}
          <Image source={require('../../assets/icons/doe.jpg')} style={{width:150, height:150,  marginTop:-80, marginBottom:0, borderRadius:100/2}}/>
          <Text style={{alignSelf:"center", fontWeight:"bold", fontSize:35}}>John Doe</Text>
          <Text style={{alignSelf:"center", fontSize:15, marginBottom:10}}>Your profile</Text>

          <TextInput
            style={styles.input}
            onChangeText={newText => setEmail_text(newText)}
            value={Email_text}
           />

          <TextInput
            style={styles.input}
            onChangeText={newText => setName_text(newText)}
            value={Name_text}
           />

          <TextInput
            style={styles.input}
            onChangeText={newText => setPassword_text(newText)}
            value={Password_text}
           />

          
      
          <View style={[styles.btn]}>
            <Button
              style = {styles.btn}
              title = 'Logout'
              color = '#190C50'
            />
          </View>
          

      <Nav navigation={navigation}/>
    </SafeAreaView>
  );
}



export default Profile