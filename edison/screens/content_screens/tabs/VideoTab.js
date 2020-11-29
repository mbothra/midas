import React, { Component } from 'react'
import { View } from 'react-native'
import {VideoItem} from '../components/'
//import {MidasStyles} from '../../../constants/'


class VideoTab extends Component {

    // boardNavigate = (boardText) =>{
    //     let navigator = this.props.navigation
    //     this.props.boardSetFunction(boardText)
    //     navigator.navigate('Classes')
    // }

    render() {
        const videos = ["D:\midasContent\earthRotation.mp4","D:\midasContent\nature.mp4","D:\midasContent\seaWaves.mp4"];
        const videoElements = videos.map((videoUri, index)=><VideoItem boardText={videoUri} boardSubText={videoUri} key={index} />)
        return (
            <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {videoElements}
            </View>
        )
    }
}

export default VideoTab;