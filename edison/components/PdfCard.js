import React, { Component } from 'react'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { connect } from "react-redux";
import { View, Dimensions} from "react-native";
import {MidasStyles} from '../constants/'
import TrackingUtils from '../utils/tracking_utils'
import { activeTrackingScreenSet } from '../store/actions/index';

const { width } = Dimensions.get("screen");

class PdfCard extends Component {

    componentDidMount(){
        const {board, className, subjectName, pdfTitle, userId, trackingInfoSetFunction} = this.props
        const self = this
        document.getElementById(pdfTitle).onclick = function() {
            const screenName =[board, className, subjectName, pdfTitle].join(':')
            TrackingUtils.track_user_activity_for_screen(screenName, userId, self, 'tracking_info')
            setTimeout(()=>{
                if(self.state.tracking_info){
                    trackingInfoSetFunction(self.state.tracking_info)
                }
            },500)
            return true    
        }
    }

    componentWillUnmount(){
        const {activeTracker} = this.props
        let trackingId = activeTracker['insertId']
        TrackingUtils.track_user_activity_for_screen_exit(trackingId, this, "tracking_exit_info")

    }

    render() {
        const {pdfTitle, pdfSubtitle, pdfPath} = this.props
        // const LeftContent = props => <Avatar.Icon {...props} icon="file-pdf" />
        let cardWidth, fontSize
        if(width > 800){
            cardWidth = width/6
            fontSize = width*0.02
        }
        else {
            cardWidth = width
            fontSize = width*0.06
        }
        const imgStyle = {
            paddingTop: '15%',
            paddingBottom: '15%',
            paddingLeft: '15%',            
            paddingRight: '15%',
        }
        let paragraph 
        if(pdfSubtitle.length > 50){
            paragraph = pdfSubtitle.substring(0,50) + "..."
        } else {
            let spaces = ""
            for(let i=0;i<50-pdfSubtitle.length;i++){
                spaces = spaces + " "
            }
            paragraph = pdfSubtitle +'...' + spaces + "."
        }        

        return (
            <View style={{width:cardWidth}}>
                <a href={pdfPath} target="_blank" type="application/pdf" id={pdfTitle} style={{textDecoration:'none'}}>
                {/* <TouchableRipple onPress={()=>{track_entry()}} > */}
                {/* <div  style={imgStyle}>
                </div> */}
                    <Card elevation={4} style={MidasStyles.pdfCardContainer}>
                    <Card.Cover source={{uri:require('../assets/vectorIcons/pdf-file-format.png')}} style={imgStyle}/>
                        <Card.Content>
                        <Title style={{fontFamily:'MidasFontBold', fontSize:fontSize}}>{pdfTitle}</Title>
                        <Paragraph style={{fontFamily:'MidasFont', fontSize:fontSize*0.8}}>{paragraph}</Paragraph>
                        </Card.Content>
                    </Card>    
                {/* </TouchableRipple>    */}
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

export default connect( mapStateToProps, mapDispatchToProps) (PdfCard);