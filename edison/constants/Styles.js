import { StyleSheet } from 'react-native';

const MidasStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00000',
      justifyContent: 'center',
      alignItems:'center'
    },
    avatarContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
      },
    button: {
      backgroundColor: '#859a9b',
      borderRadius: 200,
      padding: 10,
      marginBottom: 20,
      shadowColor: '#303838',
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.35,
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
    }
  });


export default MidasStyles