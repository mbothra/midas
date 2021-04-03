import React, { Component } from 'react'
import { Text } from 'react-native-paper';
import { Images } from '../constants/';
import {MidasStyles} from '../constants/'
import {View, Image, TouchableOpacity } from 'react-native'
import { Dimensions } from "react-native";
import { connect } from "react-redux";
import { roleSet } from '../store/actions/index';
import LoginUtils from '../utils/login_utils'
import { userIdSet } from '../store/actions/index';

const { width } = Dimensions.get("screen");

class Home extends Component {
    state={
        isLogin:false,
        password:""
      }
    navigationManager = (role) => {
        let navigator = this.props.navigation
        this.props.roleSetFunction(role)
        LoginUtils.is_login_still_active(this)
        setTimeout(() => {
            if(this.state.isLogin){
                this.props.userIdSetFunction(this.state.userId)
                LoginUtils.update_login_archive_for_user(this.state.userId, 'success')
                if(role=='Teacher'){
                    navigator.navigate('Boards')
                }
                else{
                    alert("Screen not available for the role")
                }
            }
            else{
                if(role=='Teacher'){
                    navigator.navigate('LoginScreen')
                }
                else{
                    alert("Screen not available for the role")
                }
            }
        }, 100); 

    }

    getTextHomePage = () => {
        let fontSize

        if(width< 800){
            fontSize = width*0.125 
        }
        else{
            fontSize = width*0.07 
        }

        return (        
        <View style={{flex:0.5}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:fontSize, fontFamily:'MidasFont'}}>Welcome to </Text>
                <Text style={{fontSize:fontSize, fontFamily:'MidasFontBold'}}>Midas</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:fontSize*0.3, fontFamily:'MidasFont'}}>for a seamless learning experience </Text>
            </View>
            <View style={{flex:0.2}}/>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:'MidasFontBold', fontSize:fontSize*0.35}}>An Initiative by Thinksharp Foundation</Text>
            </View>
        </View>)
    }

    getImageSourceForRole = (role) => {
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
        return imgSource
    }

    avatarViewForRoles = (role, key_index) => {
        let imgSource = this.getImageSourceForRole(role)
        const imgSize = width*0.21 
        return (
            <View style={{flexDirection:'column', alignItems:'center', marginHorizontal:imgSize*0.1,marginVertical:imgSize*0.1}} key={key_index}>     
                 <TouchableOpacity style={MidasStyles.button} onPress={()=>{this.navigationManager(role)}}>
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
        const avatarView = roles.map((role, index)=>this.avatarViewForRoles(role, index))
        const Header = this.getTextHomePage()
        return (
        <View style={MidasStyles.container}>
            {Header}
            <View style={MidasStyles.avatarContainer}>
                {avatarView}
            </View>
            {/* <View style={{alignItems:'right'}}>
                <Text style={{fontSize:width*0.07*0.25, fontFamily:'MidasFontBold'}}>*An Initiative by Thinksharp Foundation* </Text>
            </View> */}

        </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      role: state.boardInfo.role
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        roleSetFunction: (role) => dispatch(roleSet(role)),
        userIdSetFunction: (userName) => dispatch(userIdSet(userName))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (Home);
