import React, { Component } from 'react'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { subjectSet } from '../store/actions/index';
import { connect } from "react-redux";
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Dimensions} from "react-native";
import {MidasStyles, CardColorList} from '../constants/'
import Icon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("screen");

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

    getChapterCardStyle = (id) => {
        let cardHeight 
        if(width > 800){
            cardHeight = height*0.2
        }
        else {
            cardHeight = height*0.15
        }
        const customSubjectStyle = StyleSheet.create({
            chapterCardContainer: {
                marginLeft:10,
                marginRight: 10,
                marginTop:10,
                marginBottom:10,
                width:'auto',
                backgroundColor:CardColorList[id+1],
                height:cardHeight
            },
        });
        return customSubjectStyle
    }


    render() {
        const {chapterNameText, chapterNameSubText, id} = this.props
        let cardWidth, fontSize, iconSize
        const styles = this.getChapterCardStyle(id)
        if(width > 800){
            cardWidth = width/2
            fontSize = width*0.03
            iconSize=100
        }
        else {
            cardWidth = width/2
            fontSize = width*0.07
            iconSize=70
        }
        let processed_ch = chapterNameText.substring(0, chapterNameText.indexOf('-'));
        let processed_ch_name = chapterNameText.substring(chapterNameText.indexOf('-')+1, chapterNameText.length);
        const RightContent = props => <Avatar.Icon {...props} icon="book" style={{backgroundColor:CardColorList[id+1]}} size={iconSize}/>

        return (
            <View>
                <TouchableOpacity onPress={()=>{}} onFocus={this.props.chapterNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                    <Card elevation={4} style={styles.chapterCardContainer}>
                        <Card.Title title={processed_ch} right={RightContent} subtitle={processed_ch_name} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont', fontSize:fontSize*0.8,}}/>
                    </Card>    
                </TouchableOpacity>     
            </View>
        )
    }
}

