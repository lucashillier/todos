import { useEffect, useState } from 'react';

import Home from './home';
import TodoType from '@/types/Todo';

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

    return <Home todos={todos} />;
};

export default Index;
