import React, { Component } from 'react'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { subjectSet } from '../store/actions/index';
import { connect } from "react-redux";
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Dimensions} from "react-native";
import {MidasStyles} from '../constants/'
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");

export default class VideoCard extends Component {

    render() {
        const {videoTitle, videoSubtitle} = this.props
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

        return (
            <View>
                <TouchableRipple onPress={()=>{}} onFocus={this.props.videoNavigate} >
                    <Card elevation={4} style={MidasStyles.chapterCardContainer}>
                        <Card.Title title={videoTitle} subtitle={videoSubtitle} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont', fontSize:fontSize*0.8,}} left={LeftContent}/>
                    </Card>    
                </TouchableRipple>     
            </View>
        )
    }
}

