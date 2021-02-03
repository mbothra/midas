import { View, Dimensions } from 'react-native';
import { Button, Paragraph, Dialog, Portal, TouchableRipple, Text } from 'react-native-paper';

import React, { Component } from 'react'
import {MidasStyles } from "../constants";

const { width } = Dimensions.get("screen");

export default class SignupCard extends Component {
    render() {
        const {visible, hideModal, text, title, onConfirm, okText, cancelText} = this.props
        let buttonWidth, dialogWidth
        if(width< 700){
            buttonWidth = '50%'
            dialogWidth = '100%'
        }
        else{
            buttonWidth = '40%'
            dialogWidth = '80%'
        }
        return (
            <View  style={MidasStyles.container}>
            <Portal theme={{colors:{backdrop:'rgba(253,31,32,0.1)'}}}>
              <Dialog visible={visible} onDismiss={hideModal} style={MidasStyles.modalWindow}>
                <Dialog.Title style={MidasStyles.modalTitleText}>{title}</Dialog.Title>
                <Dialog.Content>
                  <Paragraph style={MidasStyles.modalText}>{text}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                <View style={{flexDirection:'row', width:buttonWidth, marginRight:'40px'}}>
                    <TouchableRipple style={MidasStyles.loginBtn} onPress={onConfirm}>
                        <Text style={MidasStyles.modalButtonText}>{okText}</Text>
                    </TouchableRipple>

                    <TouchableRipple style={MidasStyles.loginBtn} onPress={hideModal}>
                        <Text style={MidasStyles.modalButtonText}>{cancelText}</Text>
                    </TouchableRipple>  
                </View>                
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        )
    }
}