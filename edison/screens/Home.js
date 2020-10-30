import React, { Component } from 'react'
import { Text } from 'react-native-paper';
import { Images } from '../constants/';
import {MidasStyles} from '../constants/'
import { Dimensions } from "react-native";
import {View, Image, TouchableOpacity } from 'react-native'

const { width } = Dimensions.get("screen");

export default class Home extends Component {


    get_text_home_page = () => {
        let fontSize
        if(width< 800){
            fontSize = width*0.125 
        }
        else{
            fontSize = width*0.07 
        }

        return (        
        <View style={{flex:0.5}}>
            <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:fontSize, fontFamily:'MidasFont'}}>Welcome to </Text>
                <Text style={{fontSize:fontSize, fontFamily:'MidasFontBold'}}>Midas</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:fontSize*0.5, fontFamily:'MidasFont'}}>for a seamless learning experience </Text>
            </View>
            <View style={{flex:0.5}}/>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:'MidasFont', fontSize:fontSize*0.6}}> You are a ? </Text>
            </View>
        </View>)
    }

    avatar_view_for_roles = (role, key_index) => {
        let imgSource;
        if(role=='Student'){
            imgSource = Images.StudentIcon
        }
        else if (role == 'Teacher') {
            imgSource = Images.TeacherIcon
        }
        else {
            imgSource = Images.AdminIcon
        }
        const imgSize = width*0.21 
        return (
            <View style={{flexDirection:'column', alignItems:'center', marginHorizontal:imgSize*0.1,marginVertical:imgSize*0.1}} key={key_index}>     
                 <TouchableOpacity style={MidasStyles.button} onPress={()=>{alert("Hi"+role+" !")}}>
                    <Image
                            style={{width: imgSize, height: imgSize}}
                            source={imgSource} 
                    />
                </TouchableOpacity>
                 <Text style={{fontFamily:'MidasFont', fontSize:30}}> {role}</Text>
             </View>
        )
    }

    render() {
        const roles = ['Student', 'Teacher', 'Admin']
        const avatarView = roles.map((role, index)=>this.avatar_view_for_roles(role, index))
        const Header = this.get_text_home_page()
        return (
        <View style={MidasStyles.container}>
            {Header}
            <View style={MidasStyles.avatarContainer}>
                {avatarView}
            </View>
        </View>
        )
    }
}