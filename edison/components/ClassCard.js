import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { classSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import {MidasStyles, CardColorList, Images} from '../constants/'

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
    'class1': Images.Class1,
    'class2': Images.Class2,
    'class3': Images.Class3,
    'class4': Images.Class4,
    'class5': Images.Class5,
    'class6': Images.Class6,
    'class7': Images.Class7,
    'class8': Images.Class8,
    'class9': Images.Class9,
    'class10':Images.Class10,
    'classCommon Resources':Images.CommonResources,

}

class ClassCard extends Component {

    getClassCardStyle = (id) => {
        let cardHeight 
        if(width > 800){
            cardHeight = height*0.13
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
        let classDisplayName = classNameText
        if(Number.isInteger(classNameText)){
            classDisplayName = 'Class '+ classNameText
        }
        let cardWidth, fontSize, isBrowser, avatarSize
        const styles = this.getClassCardStyle(id) 
        if(width > 800){
            cardWidth = width/3.2
            fontSize = width*0.015
            isBrowser = true
            avatarSize = 65
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
                        <Card.Title title={classDisplayName} subtitle={''} left={LeftContentMobile} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont'}}/>
                    </Card>    
                </TouchableRipple>       
            :                    
            <TouchableOpacity onPress={()=>{}} onFocus={this.props.classNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                <Card elevation={8} style={styles.classCardContainer}>
                    <Card.Title title={classDisplayName} leftStyle={{marginTop:avatarSize/2.4}} subtitle={''} left={LeftContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize*1.5, marginLeft:avatarSize/1.4}} subtitleStyle={{fontSize:fontSize*0.8, fontFamily:'MidasFont', marginLeft:avatarSize/1.4, marginTop:10}}/>
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
