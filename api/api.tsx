import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoType from 'types/Todo';

// Fetches the todos from the api
const fetchTodos = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));

// Checks async storage for data, falls back to api
export const getData = async (url: string) => {
  try {
    // Check for stored value first
    const value = await AsyncStorage.getItem('todos');

    if (value !== null) {
      const data: TodoType[] = JSON.parse(value);
      return data;
    }

    // Fetch from API
    const data: TodoType[] = await fetchTodos(url);

    // Write data to storage
    storeData(data);

    return data;
  } catch (e) {
    // error reading value
    console.error(e);
    return [];
  }
};

// Writes the data to async storage
export const storeData = async (data: TodoType[]) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (e) {
    // saving error
    console.error(e);
  }
};
