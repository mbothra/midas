import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { chapterSet } from '../store/actions/index';
import {ChapterCard} from '../components/'
import {MidasStyles} from '../constants/'
import ContentProcessor from './ContentProcessor';
import {FABGroup} from '../components/'
import Footer from "../navigation/Footer";

class Chapters extends Component {

    chapterNavigate = (chapterName) => {
        this.props.chapterSetFunction(chapterName)

        let navigator = this.props.navigation
        navigator.navigate('ContentScreen')

    }

    render() {
        const board = this.props.board;
        let classNum = this.props.className;
        classNum = classNum.replace('Class ','');
        const subject = this.props.subjectName;
        const chapters = ContentProcessor.getAllChapters(board,classNum,subject);
        const cards = chapters.map((category, index)=>
                                    {
                                        return (<ChapterCard chapterNameText={category} chapterNameSubText={ContentProcessor.getDesciptionForChapter(board,category,classNum,subject)[0]} key={index} id={index} chapterNavigate={() => {this.chapterNavigate(category)}}/>)
                                    })
        return (
            <View style={MidasStyles.FABContainer}>
            <View style={{...MidasStyles.container, flex:1}}>
                {cards}
            </View>
            <hr/>
            <FABGroup navigator={this.props.navigation} route="Chapters"></FABGroup>
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