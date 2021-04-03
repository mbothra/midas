import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const width_proportion = '10%';
const height_proportion = '10%';
const { width } = Dimensions.get("screen");


const MidasStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eaeaea',
      justifyContent: 'center',
      alignItems:'center',
      backgroundImage:'linear-gradient(170deg, #fd0d20, #eaeaea, #eaeaea, white )'
    },
    FABContainer:{
      flex: 1,
    },
    Footer:{
      height: '40px',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom:0,
      backgroundImage: 'linear-gradient(to right, black ,black, black)',
      zIndex: 150,
    },
    CustomFABButton:{
      // transform:scale(1.25),
      backgroundColor:'#fd0d20'
    },
    avatarContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
      },
    genericContainerRow: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      padding:100,
      alignItems:'stretch',
      flexWrap:'wrap',
      alignContent: 'center',
    },
    genericContainerColumn: {
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',
      padding:10,
    },
    button: {
      backgroundColor: '#eaeaea',
      borderRadius: 200,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
    cardButton: {
      backgroundColor: '#eaeaea',
      borderRadius: 200,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
    },
    buttonTile: {
      backgroundColor: '#61dafb',
      padding: 50,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 10, height: 15 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
      flexGrow: 0.5
    },
    midasTextNormal: {
        fontSize:50,
        fontFamily:'MidasFont'
    },
    midasTextBold: {
        fontSize:50,
        fontFamily:'MidasFontBold'
    },
    midasTextLight: {
        fontSize:25,
        fontFamily:'MidasFontLight'
    },
    cardContainer: {
        marginLeft:10,
        marginRight: 10,
        marginTop:10,
        marginBottom:10,
        width:'auto',
        backgroundColor:'white',
        borderRadius:10,
        fontFamily:'MidasFont',
        borderRadius:40,
    },
    chapterCardContainer: {
      marginLeft:5,
      marginRight: 5,
      marginTop:5,
      marginBottom:5,
      width:'auto',
      backgroundColor:'white',
      fontFamily:'MidasFont',
  },
  pdfCardContainer: {
    marginLeft:10,
    marginRight: 10,
    marginTop:10,
    marginBottom:10,
    width:'auto',
    backgroundColor:'white',
    borderRadius:10,
    fontFamily:'MidasFont'
},
    subjectCardContainer: {
      marginLeft:10,
      marginRight: 10,
      marginTop:10,
      marginBottom:10,
      width:'auto',
      backgroundColor:'white',
      borderRadius:10,
      fontFamily:'MidasFont',
      borderRadius:40,
  },
    inputView:{
      width:"80%",
      // backgroundColor:"#ffffff",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      fontFamily:"MidasFont",
      backgroundColor: '#3CBC8D',
    },
    inputText:{
      height:50,
      color:'black',
      backgroundColor: 'lightgrey',
      marginLeft:5,
      marginRight: 5,
      marginTop:5,
      marginBottom:5,
      fontFamily:'MidasFontBold',
      width: '100%',
      borderRadius:5,
      paddingLeft:10,
      fontSize:20
    },
    forgot:{
      color:"blue",
      fontSize:11,
      textAlign:"right",
      alignContent:"center"
    },
    loginBtn:{
      width:"50%",
      backgroundColor:"black",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      alignContent:"center",
      marginTop:5,
      marginBottom:10,
      marginRight: 5,
      //boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'

    },
    loginText: {
      fontFamily:'MidasFontBold',
      color:'white',
      fontSize:20
    },
    modalTitleText: {
      fontFamily:'MidasFontBold',
      color:'white',
      fontSize:width<700?width/17:width/28
    },
    modalText: {
      fontFamily:'MidasFont',
      color:'white',
      fontSize:width<700?width/17:width/38 
    },
    modalButtonText: {
      fontFamily:'MidasFontBold',
      color:'white',
      fontSize:width<700?width/17:width/38 
    },
    modalWindow:{
      marginRight:'auto', 
      marginLeft:'auto', 
      width:width>700?'40%':'90%', 
      height:width>700?'22%':'27%', 
      backgroundColor:'rgb(253,31,32)'
    }
  });



export default MidasStyles