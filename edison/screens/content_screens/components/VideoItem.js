import React, { Component } from 'react'
import { View } from 'react-native'
import { Avatar, Card } from 'react-native-paper';
import { connect } from "react-redux";
import { Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import {MidasStyles} from '../../../constants/'
import { Video } from 'expo-av';
import {VideoCard} from '../../../components/'
import {VideoLinks} from '../../../constants/'
import { videoSet } from '../../../store/actions';


const { width } = Dimensions.get("screen");

class VideoItem extends Component {

    videoNavigate = (index) => {
        this.props.videoSetFunction(index)
        const videoMode = VideoLinks[index]['mode']
        const videoPath = VideoLinks[index]['path']
        const videoTitle = VideoLinks[index]['videoTitle']
        const {navigation} = this.props
        if(videoMode == 'Offline'){
            navigation.navigate('OfflineVideoPlayer', {
                videoTitle : videoTitle,
                videoPath: videoPath
            })

        }
    }

    render() {
        const videoElements = VideoLinks.map((info, index)=><VideoCard videoTitle={info.videoTitle} videoSubtitle={info.videoDescription} key={index}/>)
        return (
            <View>
                {videoElements}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      videoIndex: state.contentInfo.videoIndex
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        videoSetFunction: (videoIndex) => dispatch(videoSet(videoIndex))
    };
  };

export default VideoItem;
