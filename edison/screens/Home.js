import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {images} from '../assets/images'

export default class Home extends Component {
    render() {
        return (
        <View style={styles.container}>
        {/* <Text> Who are you </Text>     */}
        <TouchableOpacity style={styles.button} onPress={()=>{alert("Hi student !")}}>
        <Image
                style={{width: 150, height: 150}}
                source={images.studentIcon} 
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{alert("Hi teacher !")}}>
        <Image
                style={{width: 150, height: 150}}
                source={images.teacherIcon} 
        />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=>{alert("Hi admin !")}}>
        <Image
                style={{width: 150, height: 150}}
                source={images.adminIcon} 
        />
        </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#859a9b',
      borderRadius: 20,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
  });
