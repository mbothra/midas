import React, { Component } from 'react'
import { Text } from 'react-native-paper';
import { Images } from '../constants/';
import {MidasStyles} from '../constants/'
import { Dimensions } from "react-native";
import {View, Image, TouchableOpacity } from 'react-native'
import ContentProcessor from '../screens/ContentProcessor'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Classes extends Component {


    
    get_tab_for_class = (classNumber,key_index) => {
        const className = 'Class' + classNumber
        return (
            <View style={{flexDirection:'column', alignItems:'center'}} key={key_index}>     
                 <TouchableOpacity style={MidasStyles.buttonTile} onPress={()=>{alert("Hi "+className+" !")}}>
                 <Text style={{fontFamily:'MidasFont', fontSize:30}}> {className}</Text>
                </TouchableOpacity>
             </View>
        )

    }



    render(){
        console.log(windowHeight,windowWidth);
        var style = MidasStyles.genericContainerRow
        if(windowWidth < windowHeight){
            style = MidasStyles.genericContainerColumn
        }

        const classes = ContentProcessor.getAllClasses();
        const classTabs = classes.map((classNumber,index) => this.get_tab_for_class(classNumber,index))

        return(
        <View>
            <Text style={{fontFamily:'MidasFont', fontSize:100, alignItems:'center'}}> Classes </Text>
            <View style={style}>
                {classTabs}
            </View>
            
        </View>
        )
    }

}

