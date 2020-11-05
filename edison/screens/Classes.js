import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { classSet } from '../store/actions/index';
import {Categories} from '../constants/'
import {ClassCard} from '../components/'
import {MidasStyles} from '../constants/'

class Classes extends Component {

    classNavigate = (className) => {
        console.log(className)
        console.log(this.props)
        this.props.classSetFunction(className)

        let navigator = this.props.navigation
        navigator.navigate('Subjects')

    }

    render() {
        const {board} = this.props
        const cards = Categories.ClassCategories.map((category, index)=><ClassCard classNameText={category} classNameSubText={category} key={index} classNavigate={() => {this.classNavigate(category)}}/>)
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
      board: state.boardInfo.board
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        classSetFunction: (className) => dispatch(classSet(className))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (Classes);