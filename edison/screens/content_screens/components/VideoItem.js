import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import { boardSet } from '../store/actions/index';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import {MidasStyles} from '../constants/'

const { width } = Dimensions.get("screen");

class VideoItem extends Component {

    render() {
        const {videoTitle, videoUri} = this.props
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
                onPress={() => console.log("Video Loading")}
                style={{ height: 200, width: 200, marginBottom: 20 }}
                
                    <Video
                    style={{ height: 200, width: 200 }}
                    source={{ uri: videoUri }}
                    usePoster
                    shouldPlay={false} 
                    />
                </TouchableOpacity>       
            </View>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       board: state.boardInfo.board
//     };
//   };
  
// const mapDispatchToProps = dispatch => {
//     return {
//         boardSetFunction: (board) => dispatch(boardSet(board))
//     };
//   };

export default VideoItem;
