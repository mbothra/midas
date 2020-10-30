import React,{Component} from "react";
import { Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//Import screens here from ../screens
import Home from "../screens/Home";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();


export default class Screens extends Component {
  
  render() {
    return (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} 
                  options={{
                    headerShown: false,
                  }}
          />  
        </Stack.Navigator>
    )
  }
}

