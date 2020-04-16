import React from 'react'
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Browse from '../screens/Browse';
import Product from '../screens/Product';
import Settings from '../screens/Settings';

import { theme } from '../constants';


const ScreensStack = createStackNavigator();

const ScreensStackScreen = () => { 
  return (
    <NavigationContainer> 
      <ScreensStack.Navigator>
        <ScreensStack.Screen name="Welcome" component={Welcome} />
        <ScreensStack.Screen name="Login" component={Login} />
        <ScreensStack.Screen name="SignUp" component={SignUp} />
        <ScreensStack.Screen name="Browse" component={Browse} />
        <ScreensStack.Screen name="Forgot" component={Forgot} />
        <ScreensStack.Screen name="Explore" component={Explore} />
        <ScreensStack.Screen name="Product" component={Product} />
        <ScreensStack.Screen name="Settings" component={Settings} />
      </ScreensStack.Navigator>
    </NavigationContainer>
  );
}


// defaultNavigationOptions: {
//   headerStyle: {},
//   headerBackImage: <Image source={require('../assets/icons/back.png')} />,
//   headerBackTitle: null,
//   headerLeftContainerStyle: {},
//   headerRightContainerStyle: {},
// }

// headerStyle: {},
//     headerBackImage: <Image/>,
//    headerBackTitle: null,
//        headerLeftContainerStyle: {},
// headerRightContainerStyle: {},



export default ScreensStackScreen 