import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { classSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import {MidasStyles, CardColorList} from '../constants/'

const { width } = Dimensions.get("screen");

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


class ClassCard extends Component {

    render() {
        const {classNameText, classNameSubText, id} = this.props
        const LeftContent = props => <Avatar.Icon {...props}  icon={iconList[id]} style={{backgroundColor:CardColorList[id]}}/>
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
            <View style={{width:cardWidth}}>
                <TouchableRipple onPress={()=>{}} onFocus={this.props.classNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                    <Card elevation={8} style={MidasStyles.cardContainer}>
                        <Card.Title title={'Class '+ classNameText} subtitle={classNameSubText} left={LeftContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont'}}/>
                    </Card>    
                </TouchableRipple>       
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
