import React, { Component } from 'react'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { View, Dimensions} from "react-native";
import {MidasStyles} from '../constants/'
import TrackingUtils from '../utils/tracking_utils'
import { activeTrackingScreenSet } from '../store/actions/index';
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");

class VideoCard extends Component {

    componentDidMount(){
        const {board, className, subjectName, videoTitle, userId, trackingInfoSetFunction} = this.props
        const self = this
        document.getElementById(videoTitle).onclick = function() {
            const screenName =[board, className, subjectName, videoTitle].join(':')
            TrackingUtils.track_user_activity_for_screen(screenName, userId, self, 'tracking_info')
            setTimeout(()=>{
                console.log(self)
                console.log(self.state)
                if(self.state.tracking_info){
                    trackingInfoSetFunction(self.state.tracking_info)
                }
            },2000)
            return true    
        }
        window.addEventListener('beforeunload', this.onUnmount, false);
    }

    onUnmount = () => {
        TrackingUtils.track_user_activity_for_screen_close(this, "tracking_close_info")
        // clear cookies
    }

    componentWillUnmount(){
        const {activeTracker} = this.props
        let trackingId = activeTracker['insertId']
        TrackingUtils.track_user_activity_for_screen_exit(trackingId, this, "tracking_exit_info")

    }


    render() {
        const {videoTitle, videoSubtitle, videoPath} = this.props
        // const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
        let cardWidth, fontSize, imgStyle
        if(width > 800){
            cardWidth = width/6
            fontSize = width*0.02
            imgStyle = {
                paddingTop: '10%',
                paddingBottom: '10%',
                paddingLeft: '10%',            
                paddingRight: '10%',
            }
        }
        else {
            cardWidth = width
            fontSize = width*0.06
            imgStyle = {

            }
        }

        let paragraph 
        if(videoSubtitle.length > 50){
            paragraph = videoSubtitle.substring(0,50) + "..."
        } else {
            let spaces = ""
            for(let i=0;i<50-videoSubtitle.length;i++){
                spaces = spaces + " "
            }
            paragraph = videoSubtitle +'...' + spaces + "."
        }
        spaces = ""
        for (let i = 0; i< (45-videoTitle.length);i++){
            spaces = spaces +" "
        }

        return (
            <View style={{width:cardWidth}}>
                <a href={videoPath} target="_blank" type="application/pdf" id={videoTitle} style={{textDecoration:'none'}}>
                    <Card elevation={4} style={MidasStyles.pdfCardContainer}>
                        <Card.Cover source={{uri:require('../assets/vectorIcons/screen-player.png')}} style={imgStyle}/>
                        <Card.Content>
                        <Title style={{fontFamily:'MidasFontBold', fontSize:fontSize}}>{videoTitle}</Title>
                        <Paragraph style={{fontFamily:'MidasFont', fontSize:fontSize*0.8}}>{paragraph}</Paragraph>
                        </Card.Content>                    
                    </Card>    
                    </a>  
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      className: state.classInfo.className,
      board: state.boardInfo.board,
      subjectName: state.subjectInfo.subjectName,
      chapterName: state.chapterInfo.chapterName,
      contentType: state.contentInfo.contentType,
      contentIndex: state.contentInfo.contentIndex,
      activeTracker: state.trackingInfo.activeTracker,
      userId: state.boardInfo.userId
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        trackingInfoSetFunction: (trackingInfo) => dispatch(activeTrackingScreenSet(trackingInfo))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (VideoCard);