import React, { Component } from 'react';
import { Text } from 'react-native-paper';
import { Images } from '../constants/';
import { connect } from "react-redux";
import { subjectSet } from '../store/actions/index';
import {MidasStyles} from '../constants/';
import { Dimensions } from "react-native";
import {View, Image, TouchableOpacity } from 'react-native';
import ContentProcessor from '../screens/ContentProcessor';
import { SubjectCard } from '../components';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Subjects extends Component {
    subjectNavigate = (subjectName) => {
        console.log(subjectName)
        console.log(this.props)
        this.props.subjectSetFunction(subjectName)

        let navigator = this.props.navigation
        navigator.navigate('Chapters')

    }

    render() {
        const board = this.props.board;
        let classNum = this.props.className;
        classNum = classNum.replace('Class ','');
        const subjects = ContentProcessor.getAllSubjects(board,classNum);
        const cards = subjects.map((category, index)=><SubjectCard subjectNameText={category} subjectNameSubText={ContentProcessor.getSubjectDescription(board,classNum,category)} key={index} id={index} subjectNavigate={() => {this.subjectNavigate(category)}}/>)
        return (
            <View style={{...MidasStyles.container, flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {cards}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      subject: state.subjectInfo.subjectName,
      className: state.classInfo.className,
      board: state.boardInfo.board
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        subjectSetFunction: (subjectName) => dispatch(subjectSet(subjectName))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (Subjects);