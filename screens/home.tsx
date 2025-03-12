import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { fetchTodos } from 'api/api';
import { COLORS } from 'assets/colors';
import Todo from 'components/todo';
import { RootStackParamList } from 'navigation/index';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import TodoType from 'types/Todo';

type Props = StackScreenProps<RootStackParamList, 'Home'>;
type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

let todoID = 0;

const Home = ({ route }: Props) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  // Get the todos from the API on load
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    fetchTodos(url)
      .then((data: TodoType[]) => {
        setTodos(data);

        // Update the current todoID with the largest id
        todoID = Math.max(...data.map((aTodo) => aTodo.id));
      })
      .catch((error) => console.log(error));
  }, []);

  const navigation = useNavigation<homeScreenProp>();

  // Add a todo from params if present
  useEffect(() => {
    const title = route.params?.title;

    if (title) {
      const newTodo: TodoType = {
        title: title,
        userId: 0,
        id: ++todoID,
        completed: false
      };

      setTodos([...todos, newTodo]);

      navigation.setParams({ title: undefined });
    }
  }, [route.params?.title]);

  // Delete the todo from params if present
  useEffect(() => {
    const deleteID = route.params?.deleteID;

    if (deleteID) {
      setTodos(todos.filter((aTodo) => aTodo.id !== deleteID));

      navigation.setParams({ deleteID: undefined });
    }
  }, [route.params?.deleteID]);

  return (
    // Wrapper
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>To-Do's</Text>
      {/* Todo container */}
      <View style={styles.todoWrapper}>
        {todos.map((aTodo) => (
          <Todo key={aTodo.id} aTodo={aTodo} onPress={() => {}} />
        ))}
      </View>

      {/* Button wrapper */}
      <View style={styles.buttonWrapper}>
        <Button
          onPress={() => navigation.navigate('Delete', { todos })}
          title="Delete To-Do"
          color={COLORS.primary}
          accessibilityLabel="Add To-Do"
        />
        <Button
          onPress={() => navigation.navigate('Add')}
          title="New To-Do"
          color={COLORS.primary}
          accessibilityLabel="Add To-Do"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.background,
    alignItems: 'flex-start'
  },
  todoWrapper: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'flex-end',
    gap: 10,
    marginBottom: 20
  }
});

export default Home;
