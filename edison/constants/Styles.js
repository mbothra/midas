import { StyleSheet } from 'react-native';

const width_proportion = '10%';
const height_proportion = '10%';

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
    genericContainerRow: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      padding:100,
      alignItems:'strech',
      flexWrap:'wrap',
      alignContent: 'centre',
    },
    genericContainerColumn: {
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',
      padding:10,
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
    buttonTile: {
      backgroundColor: '#859a9b',
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
    }
  });



export default MidasStyles