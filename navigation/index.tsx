import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Add from 'screens/add';
import Home from 'screens/home';
import Delete from 'screens/delete';

export type RootStackParamList = {
  Home: { title?: string; deleteID?: number } | undefined;
  Add: undefined;
  Delete: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{ title: 'Add To-Do' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
