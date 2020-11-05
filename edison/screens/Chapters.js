import React, { Component } from 'react'
import { Text } from 'react-native-paper';
import { Images } from '../constants/';
import {MidasStyles} from '../constants/'
import { Dimensions } from "react-native";
import {View, Image, TouchableOpacity } from 'react-native'
import ContentProcessor from '../screens/ContentProcessor'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Chapters extends Component {




    
    get_tab_for_class = (className,key_index) => {
        return (
            <View style={{flexDirection:'column', alignItems:'center'}} key={key_index}>     
                 <TouchableOpacity style={MidasStyles.buttonTile} onPress={()=>{alert("Hi "+className+" !")}}>
                 <Text style={{fontFamily:'MidasFont', fontSize:30}}> {className}</Text>
                </TouchableOpacity>
             </View>
        )

    }



    render(){
        var style = MidasStyles.genericContainerRow
        if(windowWidth < windowHeight){
            style = MidasStyles.genericContainerColumn
        }

        const chapters = ContentProcessor.getChaptersForClassAndSubject(7,'Science')


        const ChapterTab = chapters.map((role,index) => this.get_tab_for_class(role,index))

        return(
        <View>
            <Text style={{fontFamily:'MidasFont', fontSize:100, alignItems:'center'}}> Chapters (Class 7 : Science)</Text>
            <View style={style}>
                {ChapterTab}
            </View>
            
        </View>
        )
    }

}

