import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import New from './pages/New';
import ButtomNew from './components/ButtomNew';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

const Tab = createBottomTabNavigator();



export default function Routes(props) {
  const [pin, setPin] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  React.useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

    })();

  }, []);
    //
   function exibir(){ 
   // if (pin.latitude > '-15.770061851521964' && pin.latitude <'-15.76360214816402'  && pin.longitude>'-47.895289554658184' && pin.longitude<'-47.89312431326632') {
    if (pin.latitude > '-15.639707705313183' && pin.latitude <'-15.639499274362075'  && pin.longitude>'-47.82789648747549' && pin.longitude<'-47.82749680305972') {
      validar = true;
      return validar;
    } else {
      // setErrorMsg('Usuário está na localização do usuario');
      validar = false;
      return validar;
      }
  } 
  
  validar = exibir() 
  console.log(validar)
 return (
 
  //  <View style={styles.container}>
  //     <Text>OLá Mundo</Text>
  //  </View> 

   <Tab.Navigator style={styles.container}
        // tabBarOptions={{
        //   style: { 
        //     backgroundColor:'#121212',
        //     borderTopColor:'transparent',
        //   },
        //   activeTintColor:'#fff',
        //   tabStyle: {
        //     paddingBottom:5,
        //     paddinTop:5,
        //   }

        // }}
        >

        <Tab.Screen 
        name="Inicio" 
        component={Home}
        options={{
          tabBarIcon:({focused, size, color}) => (
            <Feather name="home" size={size} color={color} focused={focused} />
          )
        }}
        />

        {validar &&
        <Tab.Screen 
        name= "Bater Ponto" 
        component={New}
        options={{
          tabBarLabel: "",
          tabBarIcon:({size, color}) => (
            <ButtomNew size={size} color={color}><Text>{validar}</Text></ButtomNew>
          )
        }}
        />}
        

    </Tab.Navigator>
  );
 }

 const styles = StyleSheet.create({
  container: {
    background:'#121212',
  }
});