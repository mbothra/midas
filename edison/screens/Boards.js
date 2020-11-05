import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from "react-redux";
import { boardSet } from '../store/actions/index';

class Boards extends Component {

    componentDidMount(){
        this.props.boardSetFunction('MBSE')
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
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
