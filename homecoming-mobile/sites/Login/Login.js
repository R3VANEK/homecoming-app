import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

//Blood in the water

const Login = ({navigation}) => {
    const [Email_text, setEmail_text] = useState('Email');
    const [Password_text, setPassword_text] = useState('Password')
    let cos = 2;

const styles = StyleSheet.create({
  siteContainer:{
    backgroundColor : "#fff"
  },    
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor : '#F6F6F6',
    alignItems:'center',
    justifyContent:'center',
    padding : 5,
    width:300,
    justifyContent:'center',
    marginTop:30
  },
  button : {
    marginTop:70,
    alignItems : 'center',
    
  },
  logo:{
    width:"70%",
    height:'50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const handle_change_text = () =>{
    
}

const onPressLearnMore = () => {
    navigation.navigate("Tracking")
}

return (
    <SafeAreaView style={[styles.siteContainer]}>

    <View style = {[styles.container]}>
        <Image
            style={styles.logo}
            source={require('./logo.png')}
        />
    </View>
    <View style = {[styles.container, {marginTop : -70,marginBottom:70}]}>
        <Text style = {[{fontSize:30, fontWeight:'bold'}]}>
            Log In
        </Text>

    </View>

    <View style = {[styles.container, {}]}>
    <TextInput
        style={styles.input}
        onChangeText={newText => setEmail_text(newText)}
        value={Email_text}
      />
    <TextInput
        style={styles.input}
        onChangeText={newText => setPassword_text(newText)}
        value={Password_text}
    />
    </View>

    <View style = {[styles.button]}>
    <Button
        style = {styles.button}
        color = "#190C50"
        onPress={onPressLearnMore}
        title="Login"
        accessibilityLabel="Learn more about this purple button"
    />
    </View>

    <View style = {[styles.container]}>
        <Text style = {[{color:"#190C50", marginTop:20}]}>
            Forgot password ?
        </Text>

    </View>
    </SafeAreaView>
);







  return (
    <View>
      <Text>Login site!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



export default Login