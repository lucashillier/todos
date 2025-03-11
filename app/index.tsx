import { useEffect, useState } from 'react';

import Home from './home';
import TodoType from '@/types/Todo';
import Add from './add';

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

    // return <Home todos={todos} />;
    return <Add />;
};

export default Index;
