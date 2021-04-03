import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import {AssignmentCard} from '../../../components/'
import { videoSet } from '../../../store/actions';
import { connect } from "react-redux";

class AssignmentTab extends Component {

    assignmentNavigate = (pdfInfo, index) => {
        this.props.videoSetFunction(index)
        const pdfMode = pdfInfo['mode']
        const pdfPath =pdfInfo['path']
        const pdfTitle = pdfInfo['videoTitle']
        const pdfDescription = pdfInfo['videoDescription']
        const {navigation} = this.props
        if(pdfMode == 'offline'){
            navigation.navigate('OfflinePdfReader', {
                pdfTitle : pdfTitle,
                pdfPath: pdfPath,
                pdfDescription: pdfDescription
            })

        }
        if(pdfMode == 'online'){
            navigation.navigate('OnlineVideoPlayer', {
                pdfTitle : pdfTitle,
                pdfPath: pdfPath
            })

        }
    }


    render() {
        const assignmentLinksNew = this.props.assignments;
        const assignmentElements = assignmentLinksNew.map((info, index)=><AssignmentCard style={{width:'135%'}} assignmentPath={info.URI} assignmentTitle={info.Title} assignmentSubtitle={info.Description} key={index} pdfNavigate={() => {this.pdfNavigate(info, index)}}/>)
        return (
            <View  style={{flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {assignmentElements}
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

export default connect( mapStateToProps, mapDispatchToProps) (AssignmentTab);