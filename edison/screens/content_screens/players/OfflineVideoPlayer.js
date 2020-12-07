import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { VideoTab } from '../tabs';
import {MidasStyles} from '../../../constants/'
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';

const { width, height } = Dimensions.get("screen");

export default class OfflineVideoPlayer extends React.Component {
    render() {
      const { width } = Dimensions.get('window');
      const { videoTitle, videoPath, videoDescription } = this.props.route.params
      console.log(this.props)
      console.log(videoPath)
      const LeftContent = props => <Avatar.Icon {...props} icon="earth" />
      let cardWidth, fontSize
      if(width > 800){
          cardWidth = width/2
          fontSize = width*0.02
      }
      else {
          cardWidth = width
          fontSize = width*0.06
      }
      return (
        <View> 
                  <Card style={{backgroundColor:'black'}}>
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
                  <Card.Content style={{backgroundColor:'red', height:height*0.45}}>
                    <Paragraph style={{fontFamily:'MidasFont', fontSize:fontSize*0.8, color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Paragraph>
    
                  </Card.Content>

                </Card>              
        </View>
      );
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