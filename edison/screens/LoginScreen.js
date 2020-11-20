import React, { Component } from 'react'
import { View, Image, Dimensions, TextInput } from 'react-native'
import {MidasStyles} from '../constants/'
import { Text, TouchableRipple, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { connect } from "react-redux";
import { Images } from '../constants/';
import Database from '../utils/db_utils'

const { width } = Dimensions.get("screen");

class LoginScreen extends Component {
    state={
        email:"",
        password:""
      }

    setEmail = (email_input) => {
        this.setState({
            email:email_input
        })
    }  

    setPassword = (password_input) => {
        this.setState({
            password:password_input
        })
    }  

    onSignup = () => {
        let me =this
        Database.read('SELECT * FROM boards',null, this, 'roles_db')
        setTimeout(() => {
            console.log(me.state.roles_db)
          }, 1000);   
          console.log(this.props)

          conn = Database.getConnection()

            // Database.write('INSERT INTO users (user_name, password, school, address) values (?, ?, ?, ?)',["teacher","champion","hogwarts","heaven"], this, "user_id")
    }

    onLoginClick = () => {
        const {email, password} = this.state
        let me=this
        const {navigation, role} = this.props
        Database.read('SELECT * FROM users where user_name=?',[email], this, 'user_info')
        setTimeout(() => {
            let securePassword = me.state.user_info['rows'][0]['password']
            if(password == securePassword){
                if(role=="Teacher"){
                    navigation.navigate('Boards')
                }
            } 
        }, 100);  
    }

    render() {
        const {email, password} = this.state
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
        return (
            <View style={MidasStyles.container}>
                  <Image source={Images.Logo} style={{width: imgSize, height: imgSize}}/>
                  <View style={{flex:0.1}}/>
                <Card style={{width:cardWidth}}>
            <Card.Content>
        <Title style={{textAlign:'center', fontFamily:'MidasFontBold', fontSize:fontSize}}>Hello {role}</Title>
        <Paragraph style={{textAlign:'center', fontFamily:'MidasFont', fontSize:fontSize*0.6}}>Lets get you started</Paragraph>

            <TextInput
                label="Email"
                value={email}
                placeholder="   Email..." 
                onChangeText={text => this.setEmail(text)}
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
               <TouchableRipple style={{alignContent:'left'}}>
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
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (LoginScreen);
