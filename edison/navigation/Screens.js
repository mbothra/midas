import React,{Component} from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//Import screens here from ../screens
import Home from "../screens/Home";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();

export default class Screens extends Component {
  render() {
    return (
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} 
                  options={{
                    title: 'YOU ARE A ?',
                    headerStyle: {
                      backgroundColor: '#f4511e',
                      alignSelf: 'center'
                    },
                    headerTitleStyle: { 
                      textAlign:"center", 
                      flex:1 
                  },
                    headerTintColor: '#fff',
                    headerShown: true,

                  }}
          />
        </Stack.Navigator>
    )
  }
}

