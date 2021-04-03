import React, { Component } from 'react'
import { Avatar, Card, TouchableRipple, Title, Paragraph } from 'react-native-paper';
import { View, Dimensions} from "react-native";
import {MidasStyles} from '../constants/'

const { width } = Dimensions.get("screen");

export default class VideoCard extends Component {

    render() {
        const {videoTitle, videoSubtitle} = this.props
        // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
        let cardWidth, fontSize, imgStyle
        if(width > 800){
            cardWidth = width/6
            fontSize = width*0.02
            imgStyle = {
                paddingTop: '10%',
                paddingBottom: '10%',
                paddingLeft: '10%',            
                paddingRight: '10%',
            }
        }
        else {
            cardWidth = width
            fontSize = width*0.06
            imgStyle = {

            }
        }

        let paragraph 
        if(videoSubtitle.length > 50){
            paragraph = videoSubtitle.substring(0,50) + "..."
        } else {
            let spaces = ""
            for(let i=0;i<50-videoSubtitle.length;i++){
                spaces = spaces + " "
            }
            paragraph = videoSubtitle +'...' + spaces + "."
        }
        spaces = ""
        for (let i = 0; i< (45-videoTitle.length);i++){
            spaces = spaces +" "
        }

        return (
            <View style={{width:cardWidth}}>
                <TouchableRipple onPress={()=>{}} onFocus={this.props.videoNavigate} >
                    <Card elevation={4} style={MidasStyles.pdfCardContainer}>
                        <Card.Cover source={{uri:require('../assets/vectorIcons/screen-player.png')}} style={imgStyle}/>
                        <Card.Content>
                        <Title style={{fontFamily:'MidasFontBold', fontSize:fontSize}}>{videoTitle}</Title>
                        <Paragraph style={{fontFamily:'MidasFont', fontSize:fontSize*0.8}}>{paragraph}</Paragraph>
                        </Card.Content>                    
                    </Card>    
                </TouchableRipple>     
            </View>
        )
    }
}

