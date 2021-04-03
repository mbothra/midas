import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { classSet } from '../store/actions/index';
import {ClassCard} from '../components/'
import {MidasStyles} from '../constants/'
import ContentProcessor from '../screens/ContentProcessor';
import {FABGroup} from '../components/'
import Footer from "../navigation/Footer";

class Classes extends Component {

    classNavigate = (className) => {
        this.props.classSetFunction("Class "+className)

        let navigator = this.props.navigation
        navigator.navigate('Subjects')

    }

    render() {
        const {board} = this.props
        const classes = ContentProcessor.getClassesForBoard(board)

        const cards = classes.map((category, index)=><ClassCard classNameText={category} classNameSubText={ContentProcessor.getClassCategory(board,category)} key={index} id={index} classNavigate={() => {this.classNavigate(category)}}/>)
        return (
            <View style={MidasStyles.FABContainer}>
            <View style={{...MidasStyles.container, flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {cards}
            </View>
            <hr/>
            <FABGroup navigator={this.props.navigation} route="Classes"></FABGroup>
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
      board: state.boardInfo.board
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        classSetFunction: (className) => dispatch(classSet(className))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (Classes);