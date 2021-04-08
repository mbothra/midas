import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Screens from "./navigation/Screens";
import Footer from "./navigation/Footer";
import { Asset } from "expo-asset";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AnimatedSplash from "react-native-animated-splash-screen";
import 'react-native-gesture-handler';
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
import { Images, MidasTheme } from "./constants";
import { Provider } from 'react-redux'; 
import configStore from './store/config_store';
import {MidasStyles} from './constants/';

enableScreens();

const store = configStore();

const assetImages = [
  Images.Logo,
  Images.AdminIcon,
  Images.StudentIcon,
  Images.TeacherIcon,
  Images.Logo2,
  Images.Class1,
  Images.Class2,
  Images.Class3,
  Images.Class4,
  Images.Class5,
  Images.Class6,
  Images.Class7,
  Images.Class8,
  Images.Class9,
  Images.Class10
];

export default class App extends Component  {

  
  state = {
    isReady: false,
  }

  _cacheSplashResourcesAsync = async () => {
    // const gif = require('./assets/gifs/spark.gif');
    // return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();

    try { 

      const cacheImages = assetImages.map(image => {
        return Asset.fromModule(image).downloadAsync();
      });

      const cacheGifs = assetGifs.map(gif => {
        return Asset.fromModule(gif).downloadAsync();
      });

      

      await Promise.all(cacheImages);
      await Promise.all(cacheGifs);
    } catch (e) {
      console.warn(e);
    } finally {
      let me = this
      setTimeout(() => {
        me.setState({ isReady: true });
      }, 3000);   
     }
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
     SplashScreen.preventAutoHideAsync();
     this._cacheResourcesAsync()
     Font.loadAsync({
      'MidasFont': require('./assets/font/MAXWELL_REGULAR.ttf'),
      'MidasFontBold': require('./assets/font/MAXWELL_BOLD.ttf'),
      'MidasFontLight': require('./assets/font/MAXWELL_LIGHT.ttf')
    });
   }



  render() {
    return(
        <AnimatedSplash
        translucent={true}
        isLoaded={this.state.isReady}
        logoImage={Images.Logo}
        backgroundColor={"#FFFFFF"}
        disableBackgroundImage={true}
        translucent	={true}
        logoHeight={350}
        logoWidth={350}

      >
          <Provider store={ store }>
          <NavigationContainer>
            <PaperProvider theme={MidasTheme}>
              <View style={{flex: 1}}>
                <Screens />

              </View>
            </PaperProvider>
          </NavigationContainer>
          </Provider>
          </AnimatedSplash>)
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
