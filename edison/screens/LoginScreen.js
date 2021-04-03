import React, { Component } from 'react'
import { View, Image, Dimensions, TextInput } from 'react-native'
import {MidasStyles} from '../constants/'
import { Text, TouchableRipple, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { connect } from "react-redux";
import { Images } from '../constants/';
import Database from '../utils/db_utils'
import { userIdSet } from '../store/actions/index';
import LoginUtils from '../utils/login_utils'

const { width } = Dimensions.get("screen");

class LoginScreen extends Component {
    state={
        userName:"",
        password:"",
        visibleSignout:false
      }

    setUserName = (user_input) => {
        this.setState({
            userName:user_input
        })
    }  

    setPassword = (password_input) => {
        this.setState({
            password:password_input
        })
    }  

    onSignup = () => {
        // let me =this
        // Database.read('.SELECT * FROM sys.database_files',null, this, 'roles_db')
        // setTimeout(() => {
        //     console.log(me.state.roles_db)
        //   }, 1000);   
        //   console.log(this.props)

            // Database.write('INSERT INTO users (user_name, password, school, address) values (?, ?, ?, ?)',["teacher","champion","hogwarts","heaven"], this, "user_id")
            this.setState({
                visible:true
              })
        }

        hideLogoutModal = () => {
            this.setState({
                visible:false
            })
          } 
        

    onLoginClick = () => {
        const {userName, password} = this.state
        let me=this
        const {navigation, role} = this.props
        // navigation.navigate('Boards')
        Database.read('SELECT * FROM users where user_name=?',[userName], this, 'user_info')
        setTimeout(() => {
            if(me.state.user_info['rows'][0]){
                let securePassword = me.state.user_info['rows'][0]['password']
                const userId = me.state.user_info['rows'][0]['id']
                if(password == securePassword){
                    me.props.userIdSetFunction(userId)
                    if(role=="Teacher"){
                        LoginUtils.update_login_archive_for_user( userId, 'success')
                        navigation.navigate('Boards')
                    }
                } 
            }
            else if(userName == "teacher" && password=="champion") {
                    Database.write('INSERT INTO users (user_name, password, school_id, address) values (?, ?, ?, ?)',["teacher","champion",1,"pali hill"], this, "user_id")
                    // LoginUtils.update_login_archive_for_user( userId, 'success')
                    // navigation.navigate('Boards')
            }

        }, 100);  
    }

    render() {
        const {userName, password, visible} = this.state
        const {role} = this.props
        const imgSize = width*0.21 
        let fontSize, cardWidth, buttonWidth

        if(width< 800){
            fontSize = width*0.07
            cardWidth = '70%',
            buttonWidth = '60%'
        }
        else{
            fontSize = width*0.025
            cardWidth = '35%'
            buttonWidth = '40%'
        }
        const SignupText = "Please Contact Thinksharp team at the following email or Contact, to get your login generated."
        const contactInfo =  "Email -  info@thinksharpfoundation.org, Mobile - 9892742011"
        return (
            <View style={MidasStyles.container}>
                    {/* <SignupCard visible={visible} hideModal={()=>this.hideLogoutModal()} onConfirm={()=>{this.onLogout(navigation)}} 
                                    text='Please Contact Thinksharp team at the following email or Contact, to get your login generated' title='Logout' okText="Email - info@thinksharpfoundation.org" cancelText="MObile - 9892742011"/> */}
                  <Image source={Images.Logo2} style={{width: '400px', height: '100px'}}/>
                  <View style={{flex:0.1}}/>
                <Card style={{width:cardWidth}}>
            <Card.Content>
        <Title style={{textAlign:'center', fontFamily:'MidasFontBold', fontSize:fontSize}}>Hello {role}</Title>
        <Paragraph style={{textAlign:'center', fontFamily:'MidasFont', fontSize:fontSize*0.6}}>Lets get you started</Paragraph>

            <TextInput
                label="UserName"
                value={userName}
                placeholder="   Username..." 
                onChangeText={text => this.setUserName(text)}
                style={MidasStyles.inputText}
                />     
            <TextInput  
                style={MidasStyles.inputText}
                value={password}
                placeholder="   Password..." 
                onChangeText={text => this.setPassword(text)}
                secureTextEntry/>
            </Card.Content>
            </Card>
            <View style={{flex:0.05}}/>
               <TouchableRipple style={{alignContent:'left'}} onPress={() => this.onSignup()}>
                      <Text style={MidasStyles.forgot}>Forgot Password?</Text>
                </TouchableRipple>   
                <View style={{flex:0.05}}/> 
            <View style={{flexDirection:'row', width:buttonWidth}}>
                <TouchableRipple style={MidasStyles.loginBtn} onPress={() => this.onSignup()}>
                    <Text style={MidasStyles.loginText}>Signup</Text>
                </TouchableRipple>

                <TouchableRipple style={MidasStyles.loginBtn} onPress={() => this.onLoginClick()}>
                    <Text style={MidasStyles.loginText}>Login</Text>
                </TouchableRipple>  
            </View>
            {visible?<Paragraph  style={{fontFamily:'MidasFont', fontSize:width*0.02}}>{SignupText}</Paragraph>:null}
            {visible?<Paragraph  style={{fontFamily:'MidasFont', fontSize:width*0.02}}>{contactInfo}</Paragraph>:null}

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
      role: state.boardInfo.role,
      userId: state.boardInfo.userId
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        userIdSetFunction: (userName) => dispatch(userIdSet(userName))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (LoginScreen);
