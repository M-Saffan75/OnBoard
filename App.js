
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  // React.useEffect(() => {
  //   const checkAppFirstLaunch = async () => {
  //     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
  //     if (appData === null) {
  //       setIsAppFirstLaunched(true);
  //       await AsyncStorage.setItem('isAppFirstLaunched', 'false');
  //     } else {
  //       setIsAppFirstLaunched(false);
  //     }
  //   };
  //   checkAppFirstLaunch();
  // }, []);

  return (
    // isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* {isAppFirstLaunched && ( */}
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          {/* )} */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  // );
};

export default App;
