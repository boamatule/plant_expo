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

// import { theme } from  '../constants';


// const screens = createStackNavigator({
//   Welcome,
//   Login,
//   SignUp,
//   Forgot,
//   Explore,
//   Browse,
//   Product,
//   Settings,
// }, {
//   defaultNavigationOptions: {
//     headerStyle: {},
//     headerBackImage: <Image/>,
//     headerBackTitle: null,
//     headerLeftContainerStyle: {},
//     headerRightContainerStyle: {},
//   }
// });

// const images = [
//   // require('./assets/icons/back.png'),
//   require('./assets/icons/plants.png'),
//   require('./assets/icons/seeds.png'),
//   require('./assets/icons/flowers.png'),
//   require('./assets/icons/sprayers.png'),
//   require('./assets/icons/pots.png'),
//   require('./assets/icons/fertilizers.png'),
//   require('./assets/images/plants_1.png'),
//   require('./assets/images/plants_2.png'),
//   require('./assets/images/plants_3.png'),
//   require('./assets/images/explore_1.png'),
//   require('./assets/images/explore_2.png'),
//   require('./assets/images/explore_3.png'),
//   require('./assets/images/explore_4.png'),
//   require('./assets/images/explore_5.png'),
//   require('./assets/images/explore_6.png'),
//   require('./assets/images/illustration_1.png'),
//   require('./assets/images/illustration_2.png'),
//   require('./assets/images/illustration_3.png'),
//   require('./assets/images/avatar.png'),
// ];

const ScreensStack = createStackNavigator();

const ScreensStackScreen = () => { 
  return (
    <NavigationContainer> 
      <ScreensStack.Navigator  screenOptions={{ gestureEnabled: false }}>
        <ScreensStack.Screen name="Welcome" component={Welcome} />
        {/* <ScreensStack.Screen name="Login" component={Login} />
        <ScreensStack.Screen name="SignUp" component={SignUp} />
        <ScreensStack.Screen name="Forgot" component={Forgot} />
        <ScreensStack.Screen name="Explore" component={Explore} />
        <ScreensStack.Screen name="Browse" component={Browse} />
        <ScreensStack.Screen name="Product" component={Product} />
        <ScreensStack.Screen name="Settings" component={Settings} /> */}
      </ScreensStack.Navigator>
    </NavigationContainer>
  );
}

// headerStyle: {},
//     headerBackImage: <Image/>,
//    headerBackTitle: null,
//        headerLeftContainerStyle: {},
// headerRightContainerStyle: {},


export default ScreensStackScreen 