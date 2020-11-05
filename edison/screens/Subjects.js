import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { subjectSet } from '../store/actions/index';
import {Categories} from '../constants/'
import {SubjectCard} from '../components/'
import {MidasStyles} from '../constants/'

class Subjects extends Component {

    subjectNavigate = (subjectName) => {
        console.log(subjectName)
        console.log(this.props)
        this.props.subjectSetFunction(subjectName)
        let navigator = this.props.navigation
        navigator.navigate('Chapters')
    }

    render() {
        console.log(Categories)
        const cards = Categories.SubjectCategories.map((category, index)=><SubjectCard subjectNameText={category} subjectNameSubText={category} key={index} subjectNavigate={() => {this.subjectNavigate(category)}}/>)
        return (
            <View style={{...MidasStyles.container, flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {cards}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      className: state.classInfo.className,
      board: state.boardInfo.board,
      subjectName: state.subjectInfo.subjectName
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        subjectSetFunction: (subjectName) => dispatch(subjectSet(subjectName))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (Subjects);