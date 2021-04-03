// import React, { Component } from 'react'
// import { View } from 'react-native'
// import {VideoCard} from '../../../components/'
// import {VideoLinks} from '../../../constants/'



// class VideoItem extends Component {

//     videoNavigate = (index) => {
//         // this.props.videoSetFunction(index)
//         const videoMode = VideoLinks[index]['mode']
//         const videoPath = VideoLinks[index]['path']
//         const videoTitle = VideoLinks[index]['videoTitle']
//         const {navigation} = this.props
//         if(videoMode == 'Offline'){
//             navigation.navigate('OfflineVideoPlayer', {
//                 videoTitle : videoTitle,
//                 videoPath: videoPath
//             })

//         }
//     }

//     render() {
//         const videoElements = VideoLinks.map((info, index)=><VideoCard videoTitle={info.videoTitle} videoSubtitle={info.videoDescription} key={index}/>)
//         return (
//             <View>
//                 {videoElements}
//             </View>
//         )
//     }
// }

// export default VideoItem;
