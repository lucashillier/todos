import { COLORS } from 'assets/colors';
import TodoType from 'types/Todo';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

type Props = {
  aTodo: TodoType;
  onPress: (event: GestureResponderEvent) => void;
};

const Todo = (props: Props) => {
  return (
    // Wrapper
    <TouchableHighlight style={styles.container} onPress={props.onPress}>
      <View style={styles.container}>
        {/* Checkmark */}
        <View style={styles.checkbox}></View>

        {/* Title */}
        <Text style={styles.todoText}>{props.aTodo.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: COLORS.white,
    alignItems: 'center'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 60,
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 3
  },
  todoText: {}
});

export default Todo;
