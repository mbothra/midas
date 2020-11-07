import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import { boardSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import {MidasStyles} from '../constants/'

const { width } = Dimensions.get("screen");

class BoardCard extends Component {

    render() {
        const {boardText, boardSubText} = this.props
        const LeftContent = props => <Avatar.Icon {...props} icon="book" />
        let cardWidth
        if(width > 400){
            cardWidth = width/2
        }
        else {
            cardWidth = width/2
        }
        return (
            <View style={{width:cardWidth}}>
                <TouchableOpacity >
                    <Card elevation={8} style={MidasStyles.cardContainer} onPress={this.props.boardNavigate}>
                        <Card.Title title={boardText} subtitle={boardSubText} left={LeftContent}/>
                    </Card>    
                </TouchableOpacity>       
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

export default connect( mapStateToProps, mapDispatchToProps) (BoardCard);
