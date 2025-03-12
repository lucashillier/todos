import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { COLORS } from 'assets/colors';
import Todo from 'components/todo';
import { RootStackParamList } from 'navigation/index';
import { StyleSheet, Text, View } from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'Delete'>;
type deleteScreenProp = StackNavigationProp<RootStackParamList, 'Delete'>;

const Delete = ({ route }: Props) => {
  const navigation = useNavigation<deleteScreenProp>();

  return (
    // Wrapper
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Select a To-Do to Delete</Text>
      {/* Todo container */}
      <View style={styles.todoWrapper}>
        {route.params.todos.map((aTodo) => (
          <Todo
            key={aTodo.id}
            aTodo={aTodo}
            onPress={() => navigation.popTo('Home', { deleteID: aTodo.id })}
          />
        ))}
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
  }
});

export default Delete;
