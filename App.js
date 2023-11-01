import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Profile';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Favorites" component={Favorites}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
}



const App = () => {

  const isSignedIn = false;

  const theme = {
    colors: {
      backgroundcolor: "#FFFFFF"
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          { isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
              <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
          ˇ</>
          )
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App