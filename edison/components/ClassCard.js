import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { classSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import {MidasStyles, CardColorList} from '../constants/'

const { width, height } = Dimensions.get("screen");

const iconList = [
    'dog',
    'cat',
    'rabbit',
    'fish',
    'pig',
    'panda',
    'turtle',
    'star-face',
    'paw',
    'penguin',
    'owl',
    'ladybug'
]

const classImgs = {
    'class1': require('../assets/vectorIcons/class1.png'),
    'class2': require('../assets/vectorIcons/class2.png'),
    'class3':require('../assets/vectorIcons/class3.png'),
    'class4':require('../assets/vectorIcons/class4.png'),
    'class5':require('../assets/vectorIcons/class5.png'),
    'class6':require('../assets/vectorIcons/class6.png'),
    'class7':require('../assets/vectorIcons/class7.png'),
    'class8':require('../assets/vectorIcons/class8.png'),
    'class9':require('../assets/vectorIcons/class9.png'),
    'class10':require('../assets/vectorIcons/class10.png'),

}

class ClassCard extends Component {

    getClassCardStyle = (id) => {
        let cardHeight 
        if(width > 800){
            cardHeight = height*0.2
        }
        else {
            cardHeight = height*0.15
        }
        const customSubjectStyle = StyleSheet.create({
            classCardContainer: {
                marginLeft:10,
                marginRight: 10,
                marginTop:10,
                marginBottom:10,
                width:'auto',
                height:cardHeight,
                borderRadius:70,
                backgroundColor:'turquoise'
            },
        });
        return customSubjectStyle
    }

    render() {
        const {classNameText, classNameSubText, id} = this.props
        let cardWidth, fontSize, isBrowser, avatarSize
        const styles = this.getClassCardStyle(id) 
        if(width > 800){
            cardWidth = width/2.5
            fontSize = width*0.02
            isBrowser = true
            avatarSize = 115
        }
        else {
            cardWidth = width
            fontSize = width*0.06
        }
        const LeftContentMobile = props => <Avatar.Icon {...props} icon={iconList[id]} style={{backgroundColor:CardColorList[id]}}/>
        const LeftContent = props =>  <Avatar.Image size={avatarSize} source={classImgs["class"+classNameText]}/>
        return (
            <View style={{width:cardWidth}}>
                {!isBrowser?
                    <TouchableRipple onPress={()=>{}} onFocus={this.props.classNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                    <Card elevation={8} style={MidasStyles.cardContainer}>
                        <Card.Title title={'Class '+ classNameText} subtitle={classNameSubText} left={LeftContentMobile} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont'}}/>
                    </Card>    
                </TouchableRipple>       
            :                    
            <TouchableOpacity onPress={()=>{}} onFocus={this.props.classNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                <Card elevation={8} style={styles.classCardContainer}>
                    <Card.Title title={'Class '+ classNameText} leftStyle={{marginTop:avatarSize/2.4}} subtitle={classNameSubText} left={LeftContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize*1.5, marginLeft:avatarSize/1.4}} subtitleStyle={{fontSize:fontSize*0.8, fontFamily:'MidasFont', marginLeft:avatarSize/1.4, marginTop:10}}/>
                </Card>    
            </TouchableOpacity> }
             </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      className: state.classInfo.className
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        classSetFunction: (className) => dispatch(classSet(className))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (ClassCard);
