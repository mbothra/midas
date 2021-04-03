import React, { Component } from 'react';
import { connect } from "react-redux";
import { subjectSet } from '../store/actions/index';
import {MidasStyles} from '../constants/';
import {View } from 'react-native';
import ContentProcessor from '../screens/ContentProcessor';
import { SubjectCard } from '../components';
import {FABGroup} from '../components/'
import Footer from "../navigation/Footer";

class Subjects extends Component {
    subjectNavigate = (subjectName) => {
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
            <View style={MidasStyles.FABContainer}>
            <View style={{...MidasStyles.container, flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {cards}
            </View>
            <hr/>
            <FABGroup navigator={this.props.navigation} route="Subjects"></FABGroup>
            <View style={{flex:0.2}}/>
            <View style={MidasStyles.Footer}>
                <Footer />
            </View>
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