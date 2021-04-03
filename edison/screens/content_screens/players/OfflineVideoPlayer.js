import React from 'react';
import { View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { Avatar, Card, Paragraph, Divider } from 'react-native-paper';

const { width, height } = Dimensions.get("screen");

const videoMap = {
  1:require('D:/midas/edison/assets/videos/YET_ANI_YET_NAHI.mp4'),
  2:require('D:/midas/edison/assets/videos/Yamuchi_Safar.mp4'),
  3:require('D:/midas/edison/assets/videos/english_1.mp4'),
  4:require('D:/midas/edison/assets/videos/english_2.mp4'),
}

const MobileView = (videoTitle, videoPath, videoDescription, cardWidth, fontSize, LeftContent, index) => {    
  videoPath = videoMap[index]         
return (<Card style={{backgroundColor:'black'}}>
        <Card.Title title={videoTitle} subtitle={videoDescription} left={LeftContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize, color:'white'}} subtitleStyle={{fontFamily:'MidasFont', color:'white'}}/>
        <Divider style={{backgroundColor:'white'}}/>
        <Card.Content>
          {/* <Paragraph style={{textAlign:'right'}}>By Thinksharp</Paragraph> */}
          <Video
          source={videoPath}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          shouldPlay
          style={{ width: width*0.9, height: height*0.35 }}
          useNativeControls
          
        />
        </Card.Content>
        <Divider  style={{backgroundColor:'white', height:'3px'}}/>
        <Card.Content style={{backgroundColor:'white', height:height*0.035}}>
          <Paragraph style={{fontFamily:'MidasFontBold', fontSize:fontSize*0.7, color:'red', textAlign:'right'}}>By Thinksharp</Paragraph>
        </Card.Content>
        <Divider  style={{backgroundColor:'white', height:'3px'}}/>
        <Card.Content style={{backgroundColor:'white', height:height*0.45}}>
          <Paragraph style={{fontFamily:'MidasFont', fontSize:fontSize*0.8, color:'black'}}>{videoDescription}</Paragraph>
        </Card.Content>
</Card>)   
}

const DesktopView= (videoTitle, videoPath, videoDescription, cardWidth, fontSize, LeftContent, index) => {
  videoPath = videoMap[index]
  return (   
    <View style={{ flexDirection:'row', alignItems: 'flex-start'}}>
      <Card style={{backgroundColor:'black', height:height*1.1, width:width}}>
        <Card.Title title={videoTitle} subtitle={videoDescription} left={LeftContent} titleStyle={{fontFamily:'MidasFontBold', fontSize:fontSize, color:'white'}} subtitleStyle={{fontFamily:'MidasFont', color:'white'}}/>
        <Divider style={{backgroundColor:'white'}}/>
        <Card.Content>
          {/* <Paragraph style={{textAlign:'right'}}>By Thinksharp</Paragraph> */}
          <Video
          source={videoPath}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          shouldPlay
          style={{ width: width, height: height}}
          useNativeControls
          
        />
        </Card.Content>
        <Divider  style={{backgroundColor:'white', height:'3px'}}/>
        <Card.Content style={{backgroundColor:'white', height:height*0.035}}>
          <Paragraph style={{fontFamily:'MidasFontBold', fontSize:fontSize*0.7, color:'red', textAlign:'right'}}>By Thinksharp</Paragraph>
        </Card.Content>
        <Divider  style={{backgroundColor:'white', height:'3px'}}/>
        </Card>
        <Card>
        <Card.Content style={{backgroundColor:'white', height:height*1.135, width:width*0.5}}>
          <Paragraph style={{fontFamily:'MidasFont', fontSize:fontSize*0.8, color:'black', lineHeight:'1.4'}}>{videoDescription}</Paragraph>
        </Card.Content>
        </Card>
    </View>
)   
}

export default class OfflineVideoPlayer extends React.Component {
    render() {
      const { width } = Dimensions.get('window');
      const { videoTitle, videoPath, videoDescription, index } = this.props.route.params
      const LeftContent = props => <Avatar.Icon {...props} icon="earth" />
      let cardWidth, fontSize, mobileView 
      if(width > 800){
          cardWidth = width/2
          fontSize = width*0.02
          mobileView = false
      }
      else {
          cardWidth = width
          fontSize = width*0.06
          mobileView = true
      }
      return (
        <View> 
            {mobileView?MobileView(videoTitle, videoPath, videoDescription, cardWidth, fontSize, LeftContent, index):
              DesktopView(videoTitle, videoPath, videoDescription, cardWidth, fontSize, LeftContent, index)}
        </View>
      );
    }
  }