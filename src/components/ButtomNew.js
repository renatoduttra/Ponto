import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {Entypo} from '@expo/vector-icons';

export default function components({size, color, focused}) {
 return (
   <View style={[styles.container, {backgroundColor: focused ? '#3eccf5' : '#6fdfff'}]}>
        <Entypo name="plus" color={focused ? '#fff' : '#ddd'} size={size}/>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width:  60,
        height: 60,
        borderRadius:   30,
        alignItems: 'center',//centraliza noa horizontal
        justifyContent:   'center', //centraliza noa vertical
        marginBottom:   20,
    }
  });