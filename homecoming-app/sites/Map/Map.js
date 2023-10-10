import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Modal, TextInput, Pressable } from 'react-native';

import MapView from 'react-native-maps';
import Marker from 'react-native-maps';


import Nav from '../../components/Nav/Nav'

const Map = ({navigation}) => {


const [modalVisible, setModalVisible] = useState(false);
const [modalText, setModalText] = useState("");
const [coords, setCoords] = useState(null);


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btm : {
    justifySelf:"flex-end",
    flex:1,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

  const [markerData, setMarkerData] = useState([]);

  useEffect(()=>{
      fetch("http://156.17.72.18:5000/dangers/", {
        method:"GET"
      })
      .then((res)=>{
        return res.json();
      })
      .then((res)=>{
        console.log("test z useEffect")
        console.log(res)
        setMarkerData(res)
      })
  },[])

  const addNewMarker = (coords) =>{
    setCoords(coords.nativeEvent.coordinate)
    setModalVisible(true);
  }

  const submitPoint = () =>{

    console.log(coords["longitude"].toString())
    console.log(modalText)


  

    fetch('http://156.17.72.18:5000/dangers/report', {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: modalText,
        loc_x: coords["latitude"].toString(),
        loc_y: coords["longitude"].toString()
      })
    })
    setModalVisible(false)

  }


  let markersJSX = markerData.map((el)=>{
    return(
      <MapView.Marker
        coordinate={{ latitude : parseFloat(el.loc_x) , longitude : parseFloat(el.loc_y) }}
        description={el.title}
        title={"Miejsce niebezpieczne"}
      
      />
    )
  })



  return (

 



    <SafeAreaView style={[styles.btm]}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.modalText} placeholder={"Podaj opis"} value={modalText} onChangeText={newText => setModalText(newText)}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => submitPoint()}
            >
              <Text style={styles.textStyle}>Submit Point</Text>
            </Pressable>
          </View>
        </View>
        </Modal>
      
      <MapView
      onLongPress={coords => addNewMarker(coords)}
      style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
      showsUserLocation={true}
    initialRegion={{
      latitude:  51.107883,
      longitude: 17.038538,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >


      {markersJSX}


    </MapView>

    
      
      <Nav navigation={navigation}/>
      
    </SafeAreaView>
  );
}



export default Map