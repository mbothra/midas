import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import { classSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import {MidasStyles} from '../constants/'

const { width } = Dimensions.get("screen");

class ClassCard extends Component {

    render() {
        const {classNameText, classNameSubText} = this.props
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
                    <Card elevation={8} style={MidasStyles.cardContainer} onPress={this.props.classNavigate}>
                        <Card.Title title={'Class '+ classNameText} subtitle={classNameSubText} left={LeftContent}/>
                    </Card>    
                </TouchableOpacity>       
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
