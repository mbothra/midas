import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Screens from "./navigation/Screens";
import { Image } from "react-native";
import { Asset } from "expo-asset";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import 'react-native-gesture-handler';
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
import { Images, MidasTheme } from "./constants";

enableScreens();

const ThemeContext = React.createContext('light');

const Stack = createStackNavigator();

const assetImages = [
  Images.Logo,
  Images.AdminIcon,
  Images.StudentIcon,
  Images.TeacherIcon
];

export default class App extends Component  {

  
  state = {
    isReady: false,
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/gifs/spark.gif');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();

    try { 

      const cacheImages = assetImages.map(image => {
        return Asset.fromModule(image).downloadAsync();
      });

      const gif = require('./assets/gifs/spark.gif');
      const cachegif = Asset.fromModule(gif).downloadAsync();
  
      await Promise.all(cacheImages);
    } catch (e) {
      console.warn(e);
    } finally {
      let me = this
      setTimeout(() => {
        me.setState({ isReady: true });
      }, 2);
    }
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
     SplashScreen.preventAutoHideAsync();
     Font.loadAsync({
      'MidasFont': require('./assets/font/MAXWELL_REGULAR.ttf'),
      'MidasFontBold': require('./assets/font/MAXWELL_BOLD.ttf'),
      'MidasFontLight': require('./assets/font/MAXWELL_LIGHT.ttf')
    });
   }



  render() {

    if (!this.state.isReady) {
      console.log('splash screen')
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/imgs/logo.png')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    } else {
      return (

          <NavigationContainer>
            <PaperProvider theme={MidasTheme}>
              <View style={{flex: 1}}>
                    <Screens />
              </View>
            </PaperProvider>
          </NavigationContainer>
  
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
