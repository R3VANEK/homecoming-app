import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Dimensions, Button, TouchableOpacity} from 'react-native';
import Nav from '../../components/Nav/Nav'


const TrustedProfiles = ({navigation}) => {

  let cos = 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{

   marginLeft:50,
    height : 50,
    width:50
  },
  trustedContainer:{

    width:'100%',
    alignItems:"center",
    flexDirection:"row",
    width:'100%',
    height:60,
    backgroundColor:"white",
    marginTop:7
  },
  button:{
    marginTop:10,
    marginBottom:80, //skalowanie moze byc problemem
    alignItems:'center',
    backgroundColor : '#190C5'
  },
  btm : {
    justifySelf:"flex-end",
    flex:1,

  },
  bin:{
    marginRight:0,
    height:30,
    width:30,
    position:'absolute',
    right:12
  },

});




const [lista, setlista] = useState([ 'Angus Young', 'Brian Johnson', 'Andrzej Kowalski', 'Mr. Bean', 'Święty Mikołaj', 'Mr. Trusted 6', 'Mr. Trusted 7', 'Mr. Trusted 8', 'Mr. Trusted 9', 'Mr. Trusted 10', 'Mr. Trusted 11', 'Mr. Trusted 12',])

const delUser = () =>{
  alert("Best Hack jest najlepszy na świecie")
}

const renderItem = ({ item }) => (
  
  <View style = {styles.trustedContainer} key={''} >
    <Image
      style={styles.profile}
      source={require('./profile-pic.png')}
    />
    <Text style={{marginLeft:50}}>
      {item}
    </Text>

    <TouchableOpacity onPress = {()=>{opUsers(item, false)}} style={[styles.bin]}>
    <Image
      style={styles.bin}
      source={require('./bin.png')}
    />
    </TouchableOpacity>

  </View>
);
const opUsers = (imie, isAdding) => {
 if(!isAdding){
   setlista(lista.filter((el)=>{
     return el !== imie;
    }))
 }
  // else{
  //   console.log(lista)
  //   let helpLista = lista

  //   helpLista.push(imie)
  //   console.log(helpLista)
  //   setlista(helpLista)
  // }
}




  return (
    <SafeAreaView style={[styles.btm]}>

      <View
        style = {{
          borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
          width: Dimensions.get('window').width * 1,
          height: Dimensions.get('window').width * 1,
          backgroundColor:'#190C50',
          marginTop:-270,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        underlayColor = '#ccc'
       
      />


      <Image source={require('../../assets/icons/doe.jpg')} style={{width:150, height:150, alignSelf:"center", marginTop:-80, marginBottom:0, borderRadius:100/2}}/>
      <Text style={{alignSelf:"center", fontWeight:"bold", fontSize:35}}>John Doe</Text>
      <Text style={{alignSelf:"center", fontSize:15, marginBottom:10}}>Trusted users</Text>




      <FlatList style={{height:300}} data={lista} renderItem={renderItem}/>
        <View style={[styles.button]}>
        <Button title={'add another user'} color = '#190C50' onPress={()=>{opUsers('john doe',true)}}></Button>
        </View>
     

      <Nav navigation={navigation}/>
    </SafeAreaView>
  );
}



export default TrustedProfiles