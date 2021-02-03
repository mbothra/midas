import React, { Component } from 'react'
import { Avatar, Card, TouchableRipple, Title, Paragraph } from 'react-native-paper';
import { subjectSet } from '../store/actions/index';
import { connect } from "react-redux";
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Dimensions} from "react-native";
import {MidasStyles} from '../constants/'
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");

export default class PdfCard extends Component {

    render() {
        const {pdfTitle, pdfSubtitle, pdfPath} = this.props
        const LeftContent = props => <Avatar.Icon {...props} icon="file-pdf" />
        let cardWidth, fontSize
        if(width > 800){
            cardWidth = width/6
            fontSize = width*0.02
        }
        else {
            cardWidth = width
            fontSize = width*0.06
        }
        const imgStyle = {
            paddingTop: '10%',
            paddingBottom: '10%',
            paddingLeft: '10%',            
            paddingRight: '10%',
        }
        let paragraph 
        if(pdfSubtitle.length > 50){
            paragraph = pdfSubtitle.substring(0,50) + "..."
        } else {
            let spaces = ""
            for(let i=0;i<50-pdfSubtitle.length;i++){
                spaces = spaces + " "
            }
            paragraph = pdfSubtitle +'...' + spaces + "."
        }        
        
        return (
            <View style={{width:cardWidth}}>
                <a href={pdfPath} target="_blank"  type="application/pdf" style={{textDecoration:'none'}}>
                {/* <TouchableRipple onPress={()=>{}} > */}
                {/* <div  style={imgStyle}>
                </div> */}
                    <Card elevation={4} style={MidasStyles.pdfCardContainer}>
                    <Card.Cover source={{uri:require('../assets/vectorIcons/pdf-file-format.png')}} style={imgStyle}/>
                        <Card.Content>
                        <Title style={{fontFamily:'MidasFontBold', fontSize:fontSize}}>{pdfTitle}</Title>
                        <Paragraph style={{fontFamily:'MidasFont', fontSize:fontSize*0.8}}>{paragraph}</Paragraph>
                        </Card.Content>
                    </Card>    
                {/* </TouchableRipple>    */}
                </a>  
            </View>
        )
    }
}

