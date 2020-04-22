import React from 'react'
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants';




const Tabs = createBottomTabNavigator();

const ScreensStack = createStackNavigator();

const ScreensStackScreen = ({ navigation }) => { 
  return (
    <NavigationContainer
    // defaultNavigationOptions={{
    //   headerBackButton: <Image />,
    //   headerBackTitle: null, 
    //   headerLeftContainerStyle: {},
    //   headerRightContainerStyle: {},
    // }}
    > 
      <ScreensStack.Navigator
       initialRouteName="Home"
      
        //   defaultNavigationOptions={{
        //   headerBackBotton: <Image source={require('../assets/icons/back.png')} />,
        //   headerBackTitle: null, 
        //   headerLeftContainerStyle: {},
        //   headerRightContainerStyle: {},
        // }}
      >
        <ScreensStack.Screen 
          name="Welcome" 
          component={Welcome}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '',

            }
          }}
        />
        <ScreensStack.Screen 
          name="Login" 
          component={Login}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '',
              headerTitle:''
            }
          }}
        />
        <ScreensStack.Screen
          name="SignUp" 
          component={SignUp}
          options={{
            title: '',
            headerStyle: {
           
            },
            headerTintColor: ''
          }} 
        />
        <ScreensStack.Screen
          name="Browse"
          component={Browse}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: ''
            },
            headerTintColor: ''
          }}
        />
        <ScreensStack.Screen
          name="Forgot" 
          component={Forgot}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: ''
            },
            headerTintColor: ''
          }} 
        />
        <ScreensStack.Screen
          name="Explore"
          component={Explore}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: ''
            },
            headerTintColor: ''
          }}
        />
        <ScreensStack.Screen
          name="Product"
          component={Product}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: ''
            },
            headerTintColor: ''
          }} 
        />
        <ScreensStack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: ''
            },
            headerTintColor: ''
          }} 
        />
      </ScreensStack.Navigator>
    </NavigationContainer>
  );
}

<NavigationContainer ref={containerRef} initialState={initialNavigationState}>

<Tabs.Navigator>
  <Tabs.Screen name="Intro" component={ AuthStackScreen } />   
  <Tabs.Screen name="Login" component={ LoginScreen } />   
  <Tabs.Screen name="Home" component={ HomeStackScreen } />
  <Tabs.Screen name="SignUp" component={ EmailInputScreen  } />
</Tabs.Navigator>

</NavigationContainer>




export default ScreensStackScreen 