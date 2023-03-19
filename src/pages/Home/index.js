import * as React from 'react';
import MapView, {Callout, Marker, Circle} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Home() {
  const [pin, setPin] = React.useState({
    latitude: -15.639608226931172,
    longitude: -47.827704638955915,
  });

  React.useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('A permissão para acessar o local foi negada!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location)
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: -15.639608226931172,
          longitude: -47.827704638955915,
          latitudeDelta: 0.0005,
          longitudeDelta: 0.0005,
        }}
        

      >
      <Marker 
        coordinate={pin}
        //title="Uniceub"
        //description='A melhor falculdade de Brasilia'
        pinColor = "gold"
        draggable = {true}
        onDragStart = {(e)=>{
          console.log("Comecando", e.nativeEvent.coordinate);
        }}
        onDragEnd = {(e)=>{
          console.log("Fim", e.nativeEvent.coordinate);
          
        }}
      >
        <Callout>
          <Text>Callout</Text>
        </Callout>
      </Marker>
        <Circle 
        center={pin}
        radius={30}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});