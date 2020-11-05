import React, { Component } from 'react'
import { Text } from 'react-native-paper';
import { Images } from '../constants/';
import {MidasStyles} from '../constants/'
import { Dimensions } from "react-native";
import {View, Image, TouchableOpacity } from 'react-native'
import ContentProcessor from '../screens/ContentProcessor'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Subjects extends Component {
    
    get_tab_for_subject = (subjectName,key_index) => {
        return (
            <View style={{flexDirection:'column', alignItems:'center'}} key={key_index}>     
                 <TouchableOpacity style={MidasStyles.buttonTile} onPress={()=>{alert("Hi, let's study "+subjectName+" !")}}>
                 <Text style={{fontFamily:'MidasFont', fontSize:30}}> {subjectName}</Text>
                </TouchableOpacity>
             </View>
        )

    }



    render(){
        var style = MidasStyles.genericContainerRow
        if(windowWidth < windowHeight){
            style = MidasStyles.genericContainerColumn
        }

        const subjects = ContentProcessor.getSubjectsForClass(7)


        const SubjectsTab = subjects.map((subjectName,index) => this.get_tab_for_subject(subjectName,index))

        return(
        <View>
            <Text style={{fontFamily:'MidasFont', fontSize:100, alignItems:'center'}}> Subjects (Class 7)</Text>
            <View style={style}>
                {SubjectsTab}
            </View>
            
        </View>
        )
    }

}

