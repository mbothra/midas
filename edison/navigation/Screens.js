import React,{Component} from "react";
import { Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//Import screens here from ../screens
import Home from "../screens/Home";
import Classes from "../screens/Classes"
import Chapters from "../screens/Chapters";
import Subjects from "../screens/Subjects";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();


export default class Screens extends Component {
  
  render() {
    return (
        // <Stack.Navigator initialRouteName='Home'>
        //   <Stack.Screen name='Home' component={Home} 
        <Stack.Navigator initialRouteName='Classes'>
        <Stack.Screen name='Classes' component={Subjects} 
                  options={{
                    headerShown: false,
                  }}
          />  
        </Stack.Navigator>
    )
  }
}

