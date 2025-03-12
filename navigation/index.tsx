import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Add from 'screens/add';
import Home from 'screens/home';
import Delete from 'screens/delete';
import TodoType from 'types/Todo';

export type RootStackParamList = {
  Home: { title?: string; deleteID?: number } | undefined;
  Add: undefined;
  Delete: { todos: TodoType[] };
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
        <Stack.Screen
          name="Delete"
          component={Delete}
          options={{ title: 'Delete To-Do' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
