import { StyleSheet } from 'react-native';

const width_proportion = '10%';
const height_proportion = '10%';

const MidasStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eaeaea',
      justifyContent: 'center',
      alignItems:'center'
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
        backgroundColor:'#61dafb',
        borderRadius:10,
        fontFamily:'MidasFont'
    }
  });



export default MidasStyles