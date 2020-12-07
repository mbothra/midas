import React, { Component } from 'react'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { subjectSet } from '../store/actions/index';
import { connect } from "react-redux";
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Dimensions} from "react-native";
import {MidasStyles} from '../constants/'
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");

export default class ChapterCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        const {chapterNameText, chapterNameSubText, id} = this.props
        const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
        let cardWidth, fontSize
        if(width > 800){
            cardWidth = width/2
            fontSize = width*0.02
        }
        else {
            cardWidth = width
            fontSize = width*0.06
        }
        let processed_ch = chapterNameText.substring(0, chapterNameText.indexOf('-'));
        let processed_ch_name = chapterNameText.substring(chapterNameText.indexOf('-')+1, chapterNameText.length);

        return (
            <View>
                <TouchableRipple onPress={()=>{}} onFocus={this.props.chapterNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                    <Card elevation={4} style={MidasStyles.chapterCardContainer}>
                        <Card.Title title={processed_ch} subtitle={processed_ch_name} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont', fontSize:fontSize*0.8,}}/>
                    </Card>    
                </TouchableRipple>     
            </View>
        )
    }
}

