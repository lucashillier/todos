import { createContext, useEffect, useState } from 'react';

import Home from './home';
import TodoType from '@/types/Todo';
import Add from './add';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
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
    );
};

export const TodoContext = createContext<TodoType[]>([]);

const Index = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    // Get the todos from the API on load
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
        fetch(url)
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <TodoContext.Provider value={todos}>
            <RootStack />
        </TodoContext.Provider>
    );
};

export default Index;
