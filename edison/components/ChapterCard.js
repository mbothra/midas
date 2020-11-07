import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import { subjectSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity } from "react-native";
import {MidasStyles} from '../constants/'

const { width } = Dimensions.get("screen");

export default class ChapterCard extends Component {

    render() {
        const {chapterNameText, chapterNameSubText} = this.props
        const LeftContent = props => <Avatar.Icon {...props} icon="plus" />
        let cardWidth
        if(width > 400){
            cardWidth = width/2
        }
        else {
            cardWidth = width
        }
        return (
            <View style={{width:cardWidth}}>
                <TouchableOpacity >
                    <Card elevation={8} style={MidasStyles.cardContainer} onPress={this.props.chapterNavigate}>
                        <Card.Title title={chapterNameText} subtitle={chapterNameSubText} left={LeftContent}/>
                    </Card>    
                </TouchableOpacity>       
             </View>
        )
    }
}