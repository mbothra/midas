import React,{Component} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Modal, TouchableRipple } from 'react-native-paper';
import {HeaderComponent, ModalCard} from '../components/'

class Footer extends Component {
    state = {
        visible:false
      }
    
      showLogoutModal = ()=>{
        console.log(this.props)
        this.setState({
          visible:true
        })
      }

    render() {
        const {visible} = this.state
        return(
            <View style={styles.footer}>
                <View>
                    <TouchableRipple onPress={this.showLogoutModal}>
                    <Avatar.Icon icon='power' style={{backgroundColor:'#fd0d20'}} size={40}/>
                    </TouchableRipple>
                    <ModalCard visible={visible} 
                                text='Are you sure you want to logout?' title='Logout' okText="Sure!!" cancelText="Cancel"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColour: 'gold',
        justifyContent: 'center',
        allignItems: 'center',
        height:50,
    }
});

export default Footer