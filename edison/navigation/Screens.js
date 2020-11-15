import React,{Component} from "react";
import { Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

//Import screens here from ../screens
import Home from "../screens/Home";
import Classes from "../screens/Classes"
import Boards from "../screens/Boards";
import Subjects from "../screens/Subjects";
import Chapters from "../screens/Chapters";
import ContentScreen from "../screens/content_screens/components/ContentScreen";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();


export default class Screens extends Component {
  
  render() {
    return (
        <Stack.Navigator initialRouteName='Home' animationEnabled={true}>
          <Stack.Screen name='Home' component={Home} 
                  options={{
                    headerShown: false,
                  }}
          />  
          <Stack.Screen name='Boards' component={Boards} 
                  options={{
                    headerShown: true,
                  }}
          />  
          <Stack.Screen name='Classes' component={Classes} 
            options={{
              headerShown: true,
            }}
          />  
          <Stack.Screen name='Subjects' component={Subjects} 
            options={{
              headerShown: true,
            }}
          />  
          <Stack.Screen name='Chapters' component={Chapters} 
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen name='ContentScreen' component={ContentScreen} 
            options={{
              headerShown: true,
            }}
          />  
        </Stack.Navigator>
    )
  }
}

