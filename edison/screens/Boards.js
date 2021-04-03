import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from "react-redux";
import { boardSet } from '../store/actions/index';
import {BoardCard} from '../components/'
import {MidasStyles} from '../constants/'
import ContentProcessor from '../screens/ContentProcessor';
import {FABGroup} from '../components/'
import Footer from "../navigation/Footer";

class Boards extends Component {

    boardNavigate = (boardText) =>{
        let navigator = this.props.navigation
        this.props.boardSetFunction(boardText)
        navigator.navigate('Classes')
    }

    render() {
        const boards = ContentProcessor.getAllBoards();
        const cards = boards.map((category, index)=><BoardCard boardText={category} boardSubText={category} key={index} id={index} boardNavigate={() => {this.boardNavigate(category)}}/>)
        return (
          <View style={MidasStyles.FABContainer}>
        <View style={{...MidasStyles.container, flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {cards}
            </View>
            <hr/>
            <FABGroup navigator={this.props.navigation} route="Boards"></FABGroup>
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
      board: state.boardInfo.board
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        boardSetFunction: (board) => dispatch(boardSet(board))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (Boards);