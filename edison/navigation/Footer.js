import React,{Component} from "react";
import { View, StyleSheet } from "react-native";

class Footer extends Component {
    state = {
        visible:false
      }
    
      showLogoutModal = ()=>{
        console.log(this.props)
        this.setState({
          visible:true
        })
      }

    render() {
        const {visible} = this.state
        return(
                <View>
                    <div class ='d-flex justify-content-end'>
                        <a href="http://localhost:8888/thinkSharpAboutUs.pdf" target="_blank" style = {{color:'white', marginRight:'20px', fontFamily:'MidasFont', fontSize:'20px', textDecoration:'underline'}}>
                            About Us
                        </a>
                        <div style={{color:'white', marginRight:'20px'}}>|</div>
                        <a href="http://localhost:8888/ThinkSharp_tou.pdf" target="_blank" style = {{color:'white', marginRight:'20px', fontFamily:'MidasFont', fontSize:'20px', textDecoration:'underline'}}>
                            Terms of Use
                        </a>
                        <div style={{color:'white', marginRight:'20px'}}>|</div>
                        <a href="http://localhost:8888/ThinksharpPrivacyPolicy.pdf" target="_blank" style = {{color:'white', marginRight:'20px', fontFamily:'MidasFont', fontSize:'20px', textDecoration:'underline'}}>
                            Privacy Policy
                        </a>
                        <div style={{color:'white', marginRight:'20px'}}>|</div>

                        <a href="javascript:void(0)" style = {{color:'white', marginRight:'12px', fontFamily:'MidasFont', fontSize:'20px'}}>
                            Developed by 
                        </a>
                        <a href="https://www.linkedin.com/in/mudit-bothra-676275b9/" target="_blank" style = {{color:'white', marginRight:'10px', fontFamily:'MidasFont', fontSize:'20px', textDecoration:'underline'}}>
                            Mudit Bothra
                        </a>
                        <div style = {{color:'white', marginRight:'10px', fontFamily:'MidasFont', fontSize:'20px'}}>{'&'}</div>
                        <a href="https://www.linkedin.com/in/vishnoiamit/" target="_blank" style = {{color:'white', marginRight:'30px', fontFamily:'MidasFont', fontSize:'20px', textDecoration:'underline'}}>
                            Amit Vishnoi    
                        </a>
                    </div>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    footer:{
        backgroundColour: 'gold',
        justifyContent: 'center',
        allignItems: 'center',
        height:50,
    }
});

export default Footer