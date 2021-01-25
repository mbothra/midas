import React,{Component} from "react";
import { View, Dimensions } from "react-native";
import { Avatar, Modal, TouchableRipple } from 'react-native-paper';

import { createStackNavigator } from "@react-navigation/stack";

//Import screens here from ../screens
import Home from "../screens/Home";
import Classes from "../screens/Classes"
import Boards from "../screens/Boards";
import Subjects from "../screens/Subjects";
import Chapters from "../screens/Chapters";
import ContentScreen from "../screens/content_screens/ContentScreen";
import LoginScreen from "../screens/LoginScreen";
import OfflineVideoPlayer from "../screens/content_screens/players/OfflineVideoPlayer";
import OnlineVideoPlayer from "../screens/content_screens/players/OnlineVideoPlayer";

import {HeaderComponent, ModalCard} from '../components/'
import { Images } from '../constants/';
import LoginUtils from '../utils/login_utils'
import { connect } from "react-redux";
import { HeaderBackButton } from '@react-navigation/stack';

const { width } = Dimensions.get("screen");
let headerSize, headerHeight

const Stack = createStackNavigator();

const boardHeaderComponent = (props) => <HeaderComponent title='Boards' subtitle='teacher' imgSource={Images.Logo} {...props}/>

if(width > 800){
  headerSize = width*0.025
  headerHeight = width*0.07
  logoutButtonSize = width/20
}
else {
  headerSize = width*0.06
  headerHeight = width*0.15
  logoutButtonSize = width/9
}

class Screens extends Component {
  
  state = {
    visible:false
  }

  showLogoutModal = ()=>{
    console.log(this.props)
    this.setState({
      visible:true
    })
  }

  hideLogoutModal = () => {
    console.log(this.props)
    this.setState({
        visible:false
    })
  } 

  onLogout = (navigation) => {
    const {userId} = this.props
    this.hideLogoutModal()
    LoginUtils.update_login_archive_for_user(userId, 'logout')
    navigation.navigate('Home')
  }

  render() {
    const {visible} = this.state
    let me = this
    return (
        <Stack.Navigator initialRouteName='Home' animationEnabled={true}>
          <Stack.Screen name='Home' component={Home} 
                  options={{
                    headerShown: false,
                  }}
          />  
          <Stack.Screen name='Boards' component={Boards} 
                  options={({navigation}) => ({
                    headerShown: true,
                      title: 'Select Board',
                      headerStyle: {
                        backgroundColor: '#fd0d20',
                        height: headerHeight,
                        //boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      },
                      headerTintColor: 'white',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'MidasFontBold',
                        fontSize:headerSize
                      },
                      headerRight: () => (
                        <View>
                        <TouchableRipple onPress={this.showLogoutModal}>
                        <Avatar.Icon icon='power' style={{backgroundColor:'#fd0d20'}} size={logoutButtonSize}/>
                        </TouchableRipple>
                        <ModalCard visible={visible} hideModal={()=>this.hideLogoutModal()} onConfirm={()=>{this.onLogout(navigation)}} 
                                    text='Are you sure you want to logout?' title='Logout'/>
                        </View>
                      ),
                      headerLeft: (props) => (
                        <HeaderBackButton
                          {...props}
                          onPress={() => {
                              navigation.navigate('Home')
                          }}
                        />
                      ),
                  })}
          />  
          <Stack.Screen name='Classes' component={Classes} 
                  options={({navigation})=>({
                    headerShown: true,
                      title: 'Select Class',
                      headerStyle: {
                        backgroundColor: '#fd0d20',
                        height: headerHeight,
                        //boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      },
                      headerTintColor: 'white',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'MidasFontBold',
                        fontSize:headerSize
                      },
                      headerRight: () => (
                        <View>
                        <TouchableRipple onPress={this.showLogoutModal}>
                        <Avatar.Icon icon='power' style={{backgroundColor:'#fd0d20'}} size={logoutButtonSize}/>
                        </TouchableRipple>
                        <ModalCard visible={visible} hideModal={()=>this.hideLogoutModal()} onConfirm={()=>{this.onLogout(navigation)}} 
                                    text='Are you sure you want to logout?' title='Logout'/>
                        </View>
                      ),
                  })}
          />  
          <Stack.Screen name='Subjects' component={Subjects} 
                  options={({navigation})=>({
                    headerShown: true,
                      title: 'What are we studying today?',
                      headerStyle: {
                        backgroundColor: '#fd0d20',
                        height: headerHeight,
                        //boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      },
                      headerTintColor: 'white',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'MidasFontBold',
                        fontSize:headerSize
                      },
                      headerRight: () => (
                        <View>
                        <TouchableRipple onPress={this.showLogoutModal}>
                        <Avatar.Icon icon='power' style={{backgroundColor:'#fd0d20'}} size={logoutButtonSize}/>
                        </TouchableRipple>
                        <ModalCard visible={visible} hideModal={()=>this.hideLogoutModal()} onConfirm={()=>{this.onLogout(navigation)}} 
                                    text='Are you sure you want to logout?' title='Logout'/>
                        </View>
                      ),
                  })}
          />  
          <Stack.Screen name='Chapters' component={Chapters} 
                  options={({navigation})=>({
                    headerShown: true,
                      title: 'Lets go!',
                      headerStyle: {
                        backgroundColor: '#fd0d20',
                        height: headerHeight,
                        //boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      },
                      headerTintColor: 'white',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'MidasFontBold',
                        fontSize:headerSize
                      },
                      headerRight: () => (
                        <View>
                        <TouchableRipple onPress={this.showLogoutModal}>
                        <Avatar.Icon icon='power' style={{backgroundColor:'#fd0d20'}} size={logoutButtonSize}/>
                        </TouchableRipple>
                        <ModalCard visible={visible} hideModal={()=>this.hideLogoutModal()} onConfirm={()=>{this.onLogout(navigation)}} 
                                    text='Are you sure you want to logout?' title='Logout'/>
                        </View>
                      ),
                  })}          />
          <Stack.Screen name='ContentScreen' component={ContentScreen} 
                  options={({navigation})=>({
                    headerShown: true,
                      title: 'Lets Learn',
                      headerStyle: {
                        backgroundColor: '#fd0d20',
                        height: headerHeight,
                        //boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                      },
                      headerTintColor: 'white',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'MidasFontBold',
                        fontSize:headerSize
                      },
                      headerRight: () => (
                        <View>
                        <TouchableRipple onPress={this.showLogoutModal}>
                        <Avatar.Icon icon='power' style={{backgroundColor:'#fd0d20'}} size={logoutButtonSize}/>
                        </TouchableRipple>
                        <ModalCard visible={visible} hideModal={()=>this.hideLogoutModal()} onConfirm={()=>{this.onLogout(navigation)}} 
                                    text='Are you sure you want to logout?' title='Logout'/>
                        </View>
                      ),
                  })}
          />  
          <Stack.Screen name='LoginScreen' component={LoginScreen} 
            options={{
              headerShown: false,
            }}
          />  
          <Stack.Screen name='OfflineVideoPlayer' component={OfflineVideoPlayer} 
              options={({navigation})=>({
                headerShown: true,
                  title: 'Lets Learn',
                  headerStyle: {
                    backgroundColor: '#fd0d20',
                    height: headerHeight,
                    //boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
                  },
                  headerTintColor: 'white',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily:'MidasFontBold',
                    fontSize:headerSize
                  },
                  headerRight: () => (
                    <View>
                    <TouchableRipple onPress={this.showLogoutModal}>
                    <Avatar.Icon icon='power' style={{backgroundColor:'#fd0d20'}} size={logoutButtonSize}/>
                    </TouchableRipple>
                    <ModalCard visible={visible} hideModal={()=>this.hideLogoutModal()} onConfirm={()=>{this.onLogout(navigation)}} 
                                text='Are you sure you want to logout?' title='Logout'/>
                    </View>
                  ),
              })}
          />  
          <Stack.Screen name='OnlineVideoPlayer' component={OnlineVideoPlayer} 
            options={{
              headerShown: false,
            }}
          />  
        </Stack.Navigator>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.boardInfo.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect( mapStateToProps, mapDispatchToProps) (Screens);
