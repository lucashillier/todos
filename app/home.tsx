import { StyleSheet, Text, View } from 'react-native';

import Todo from '@/components/todo';
import TodoType from '@/types/Todo';

type Props = {
    todos: TodoType[];
};

const Home = (props: Props) => {
    return (
        // Wrapper
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>To-Do's</Text>

            {/* Todo container */}
            <View style={styles.todoWrapper}>
                {props.todos.map((aTodo, index) => (
                    <Todo key={index} aTodo={aTodo} />
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
        backgroundColor: '#ededed',
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

export default Home;
