import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { subjectSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import {MidasStyles, CardColorList} from '../constants/'

const { width, height} = Dimensions.get("screen");

const iconList = {
    "Maths":"sack-percent",
    "Science":"flask",
    "History":"map",
    "Civics":"gavel",
    "Geography":"earth",
    "Marathi":"typewriter"
}

class SubjectCard extends Component {

    getSubjectCardStyle = (id) => {
        let cardHeight 
        if(width > 800){
            cardHeight = height*0.2
        }
        else {
            cardHeight = height*0.15
        }
        const customSubjectStyle = StyleSheet.create({
            subjectCardContainer: {
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
        console.log("Subject Cards")
        const {subjectNameText, subjectNameSubText, id} = this.props
        const styles = this.getSubjectCardStyle(id)
        let cardWidth, fontSize, iconSize
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
        const RightContent = props => <Avatar.Icon {...props} icon={iconList[subjectNameText]} style={{backgroundColor:CardColorList[id+1]}} size={iconSize}/>
        return (
            <View style={{width:cardWidth}}>
                <TouchableRipple onPress={()=>{}} onFocus={this.props.subjectNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                    <Card elevation={8} style={styles.subjectCardContainer}>
                        <Card.Title title={subjectNameText} subtitle={subjectNameSubText} right={RightContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont'}}/>
                    </Card>    
                </TouchableRipple>       
             </View>
        )
    }
}



const mapStateToProps = state => {
    return {
      subjectName: state.subjectInfo.sujectName
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        subjectSetFunction: (subjectName) => dispatch(subjectSet(subjectName))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (SubjectCard);
