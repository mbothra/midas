import { DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'MidasFont',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'MidasFontBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'MidasFont',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'MidasFont',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  dark: true,
  roundness: 4,
  colors: {
    primary: '#034748',
    accent: '#11B5E4',
    background: '#F1F7ED',
    surface: '#F1F7ED',
    text: '#001021',
    error: '#B71F0E',
    disabled: '#BEC6C6',
    placeholder: '#1481BA',
    backdrop: '#001021',
  },
  fonts: configureFonts(fontConfig),

};

export default theme