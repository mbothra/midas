import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import {MidasStyles} from '../../../constants/'
import {VideoCard} from '../../../components/'
import {VideoLinks} from '../../../constants/'
import { videoSet } from '../../../store/actions';
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");

class VideoTab extends Component {

    videoNavigate = (videoInfo, index) => {
        this.props.videoSetFunction(index)
        const videoMode = videoInfo['mode']
        const videoPath =videoInfo['path']
        const videoTitle = videoInfo['videoTitle']
        const videoDescription = videoInfo['videoDescription']
        const {navigation} = this.props
        if(videoMode == 'offline'){
            navigation.navigate('OfflineVideoPlayer', {
                videoTitle : videoTitle,
                videoPath: videoPath,
                videoDescription: videoDescription
            })

        }
        if(videoMode == 'online'){
            navigation.navigate('OnlineVideoPlayer', {
                videoTitle : videoTitle,
                videoPath: videoPath
            })

        }
    }


    render() {
        const videoElements = VideoLinks.map((info, index)=><VideoCard videoTitle={info.videoTitle} videoSubtitle={info.videoDescription} key={index} videoNavigate={() => {this.videoNavigate(info, index)}}/>)
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

export default connect( mapStateToProps, mapDispatchToProps) (VideoTab);