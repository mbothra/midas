import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { VideoTab } from '../tabs';
import {MidasStyles} from '../../../constants/'
import { Avatar, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import PDFReader from 'rn-pdf-reader-js'


export default class OfflinePdfReader extends React.Component {
    render() {
        const { width } = Dimensions.get('window');
        const { pdfTitle, pdfPath, pdfDescription } = this.props.route.params
        const LeftContent = props => <Avatar.Icon {...props} icon="earth" />
        let cardWidth, fontSize, mobileView 
  
        return (
      <PDFReader
        source={{
          uri: 'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
        }}></PDFReader>
        )
    }
}
