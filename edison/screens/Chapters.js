import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { chapterSet } from '../store/actions/index';
import {Categories} from '../constants/'
import {ChapterCard} from '../components/'
import {MidasStyles} from '../constants/'

class Chapters extends Component {

    chapterNavigate = (chapterName) => {
        console.log(chapterName)
        console.log(this.props)
        this.props.chapterSetFunction(chapterName)

        // let navigator = this.props.navigation
        // navigator.navigate('Subjects')

    }

    render() {
        const cards = Categories.ChapterCategories.map((category, index)=><ChapterCard chapterNameText={category} chapterNameSubText={category} key={index} chapterNavigate={() => {this.chapterNavigate(category)}}/>)
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
      subjectName: state.subjectInfo.subjectName,
      chapterName: state.chapterInfo.chapterName
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        chapterSetFunction: (chapterName) => dispatch(chapterSet(chapterName))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (Chapters);