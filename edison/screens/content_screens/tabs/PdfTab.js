import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import {MidasStyles} from '../../../constants/'
import {PdfCard} from '../../../components/'
import {PdfLinks} from '../../../constants/'
import { videoSet } from '../../../store/actions';
import { connect } from "react-redux";

const { width } = Dimensions.get("screen");

class PdfTab extends Component {

    pdfNavigate = (pdfInfo, index) => {
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
        const pdfLinksNew = this.props.readings;
        console.log(pdfLinksNew)
        const pdfElements = pdfLinksNew.map((info, index)=><PdfCard style={{width:'135%'}} pdfPath={info.URI} pdfTitle={info.ReadingTitle} pdfSubtitle={info.Description} key={index} pdfNavigate={() => {this.pdfNavigate(info, index)}}/>)
        return (
            <View  style={{flexDirection:'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                {pdfElements}
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

export default connect( mapStateToProps, mapDispatchToProps) (PdfTab);