import { useEffect, useState } from "read";
const useFetch = (url) => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await FileSystemDirectoryHandle(url);
      const data = await res.json();
      setTodos(data);
    };
    getData();
  }, 1);
  return [todos, setTodos];
};
export default useFetch;
