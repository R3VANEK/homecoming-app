import React, {useState, useEffect, request, PERMISSIONS} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableHighlight, Vibration, Alert, Pressable, PermissionsAndroid, Button} from 'react-native';
import * as Location from 'expo-location'


import Nav from '../../components/Nav/Nav'

const Tracking = ({ navigation }) => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location;
      setLocation(await Location.getCurrentPositionAsync({}));
      fetch('http://156.17.72.23:5000/tracker/collect-location', {
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          loc_x: location.latitude.toString(),
          loc_y: location.longitude.toString()
        })
      })
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location)

    let data = {
      loc_x: location.latitude,
      loc_y: location.altitude
    }



  }

  console.log("LOKACJA 2: " + text)



const [isTracking, setTracking] = useState(false)
const [counter, setCounter] = useState(11);
const [dangerCounter, setDangerCounter] = useState(10)
const [modalVisible, setModalVisible] = useState(false);
const [localization, setLocalization] = useState(null);



const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS
  ];

  let timeoutHandler = null;
  let dangerousTimeoutHandler = null;

useEffect(() => {
  if(counter > 0 && isTracking){
    timeoutHandler = setTimeout(()=>{
      setCounter(counter - 1)
    },1000)
  }


  if(counter == 0){
    Vibration.vibrate(PATTERN, true)
    dangerousTimeoutHandler = setTimeout(()=>{
      setDangerCounter(dangerCounter - 1)
    },1000)


  }

}, [counter, isTracking, dangerCounter]);



function parseSeconds(timer){

  let minutes = Math.floor(timer / 60);
  let seconds = timer - minutes * 60;

  if(seconds < 10)
    return minutes + ":0" + seconds;
  else
    return minutes + ":" + seconds;

}



const renderDangerousModal = () =>{

  if(modalVisible){
    return(
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    )
  }
  
}



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
  }
});


  const startTimer = () =>{
    setTracking(!isTracking)
    setCounter(11)
    clearTimeout(timeoutHandler);
    clearTimeout(dangerousTimeoutHandler);
    Vibration.cancel();

  }

  const resetTimer = () =>{

  }




  return (
    
    <SafeAreaView style={styles.siteContainer}>
      <View style={styles.contentContainer}>
        

      <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        backgroundColor:'#190C50',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'20%'
      }}
      underlayColor = '#ccc'
      onPress = { () => startTimer() }
    >

      {
        (!isTracking) ? <Text style={{fontSize:25, color:"white", fontWeight:'bold'}}>START TRACKING</Text> : <Text style={{fontSize:35, color:"white", fontWeight:'bold'}}>{parseSeconds(counter)}</Text>
      }
      
    </TouchableHighlight>
        
      </View>

      <Nav navigation={navigation}/>
    </SafeAreaView>
  );
}



export default Tracking


