export const fetchTodos = (url: string) =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
