import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import {VideoCard} from '../../../components/'
import { videoSet } from '../../../store/actions';
import { connect } from "react-redux";

class VideoTab extends Component {

    videoNavigate = (videoInfo, index) => {
        this.props.videoSetFunction(index);
        let videoMode = 'offline';
        if(videoInfo['IsOnline']==1){
            videoMode = 'online'
        }
        const videoPath =videoInfo['URI']
        const videoTitle = videoInfo['VideoTitle']
        const videoDescription = videoInfo['Description']
        const {navigation} = this.props
        if(true){
            navigation.navigate('OfflineVideoPlayer', {
                videoTitle : videoTitle,
                videoPath: videoPath,
                videoDescription: videoDescription,
                index:index
            })

        }
        else if(videoMode === 'online'){
            navigation.navigate('OnlineVideoPlayer', {
                videoTitle : videoTitle,
                videoPath: videoPath
            })

        }
    }


    render() {
        const videoLinksNew = this.props.videos;
        const videoElements = videoLinksNew.map((info, index)=><VideoCard videoTitle={info.VideoTitle} videoSubtitle={info.Description} key={info.index} videoNavigate={() => {this.videoNavigate(info, info.ID)}}/>)
        return (
            <View style={{flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
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