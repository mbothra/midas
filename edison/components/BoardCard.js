import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { boardSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import {MidasStyles, CardColorList} from '../constants/'

const { width } = Dimensions.get("screen");

const iconList = [
    'chess-rook',
    'chess-bishop',
    'chess-king',
    'chess-queen'
]
class BoardCard extends Component {

    state = {
        cardWidth : width/2
    }

    render() {
        const {boardText, boardSubText, id} = this.props
        let {cardWidth} = this.state
        const LeftContent = props => <Avatar.Icon {...props} icon={iconList[id]} style={{backgroundColor:CardColorList[id]}}/>
        let fontSize
        if(width > 800){
            fontSize = width*0.02
        }
        else {
            fontSize = width*0.06
        }
        return (
            <View style={{width:cardWidth}}>
                <TouchableRipple onPress={()=>{}} onFocus={this.props.boardNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                    <Card elevation={8} style={MidasStyles.cardContainer}>
                        <Card.Title title={boardText} subtitle={boardSubText} left={LeftContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont'}}/>
                    </Card>    
                </TouchableRipple>       
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
