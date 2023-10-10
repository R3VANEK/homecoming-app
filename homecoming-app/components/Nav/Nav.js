import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Nav = ({navigation}) => {

  let cos = 2;



    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection:"row",
            
            justifySelf:"flex-end",
            flex:1,
            marginTop:0,
            marginBottom:3,
            position:'absolute',
            bottom:0,
            
           
        },

        element : {
            alignItems:"center",
            justifyContent:"center",
            flex:1,
            flexDirection:"column"
        },
        text:{
            flex:1
        },
        font:{
            fontSize:15,
            color:"black", 
            fontWeight:'bold'
        }
    });




  return (
    <View style={[styles.container]}>
      
        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Tracking')}>
            <Image source={require('../../assets/icons/search.png')} />
            <Text style = {styles.font}>Track</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Map')}>
            <Image source={require('../../assets/icons/book.png')}/>
            <Text style = {styles.font}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('TrustedProfiles')}>
            <Image source={require('../../assets/icons/trusted.png')}/>
            <Text style = {styles.font}>Trusted</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.element} onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../../assets/icons/profile.png')}/>
            <Text style = {styles.font}>Profile</Text>
        </TouchableOpacity>

    </View>
  );
}



export default Nav