import TodoType from '@/types/Todo';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    aTodo: TodoType;
};

const Todo = (props: Props) => {
    return (
        // Wrapper
        <View style={styles.container}>
            {/* Checkmark */}
            <TouchableOpacity style={styles.checkbox}></TouchableOpacity>

            {/* Title */}
            <Text style={styles.todoText}>{props.aTodo.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        gap: 8,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 60,
        backgroundColor: '#FFF',
        borderColor: '#2596be',
        borderWidth: 3
    },
    todoText: {}
});

export default Todo;
