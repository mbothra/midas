import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import { subjectSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity } from "react-native";
import {MidasStyles} from '../constants/'

const { width } = Dimensions.get("screen");

class SubjectCard extends Component {

    render() {
        console.log("Subject Cards")
        const {subjectNameText, subjectNameSubText} = this.props
        console.log(this.props)
        const LeftContent = props => <Avatar.Icon {...props} icon="plus" />
        let cardWidth
        if(width > 400){
            cardWidth = width/2
        }
        else {
            cardWidth = width/10
        }
        return (
            <View style={{width:cardWidth}}>
                <TouchableOpacity >
                    <Card elevation={8} style={MidasStyles.cardContainer} onPress={this.props.subjectNavigate}>
                        <Card.Title title={subjectNameText} subtitle={subjectNameSubText} left={LeftContent}/>
                    </Card>    
                </TouchableOpacity>       
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
