import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card, TouchableRipple } from 'react-native-paper';
import { boardSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, TouchableHighlight, StyleSheet } from "react-native";
import {MidasStyles, CardColorList} from '../constants/'

const { width, height } = Dimensions.get("screen");

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

    getSubjectCardStyle = (id) => {
        let cardHeight 
        if(width > 800){
            cardHeight = height*0.2
        }
        else {
            cardHeight = height*0.15
        }
        const customSubjectStyle = StyleSheet.create({
            boardCardContainer: {
                marginLeft:10,
                marginRight: 10,
                marginTop:10,
                marginBottom:10,
                width:'auto',
                height:cardHeight,
                borderRadius:70,
                backgroundColor:'turquoise'
            },
        });
        return customSubjectStyle
    }

    render() {
        const {boardText, boardSubText, id} = this.props
        const styles = this.getSubjectCardStyle(id)
        let fontSize, isBrowser, avatarSize, cardWidth
        if(width > 800){
            isBrowser=true
            fontSize = width*0.02
            avatarSize = 120
            cardWidth = width/2
        }
        else {
            fontSize = width*0.06
            cardWidth = width/2
        }
        const LeftContentMobile = props => <Avatar.Icon {...props} icon={iconList[id]} style={{backgroundColor:CardColorList[id]}}/>
        const LeftContent = props => <Avatar.Image size={avatarSize} source={require('../assets/vectorIcons/MSE.png')}/>
        return (
            <View style={{width:cardWidth}}>
                {!isBrowser?               
                 <TouchableRipple onPress={()=>{}} onFocus={this.props.boardNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                    <Card elevation={8} style={MidasStyles.cardContainer}>
                        <Card.Title title={boardText} subtitle={boardSubText} left={LeftContentMobile} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize}} subtitleStyle={{fontFamily:'MidasFont'}}/>
                    </Card>    
                </TouchableRipple>:
                <TouchableOpacity onPress={()=>{}} onFocus={this.props.boardNavigate} rippleColor='rgba(253, 13, 32, 0.3)'>
                <Card elevation={8} style={styles.boardCardContainer}>
                    <Card.Title title={boardText} leftStyle={{marginTop:avatarSize/2.5}} subtitle={boardSubText} left={LeftContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize*1.5, marginLeft:avatarSize/1.4}} subtitleStyle={{fontSize:fontSize*0.8, fontFamily:'MidasFont',  marginLeft:avatarSize/1.4, marginTop:10}}/>
                </Card>    
            </TouchableOpacity>      
            }
    
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
