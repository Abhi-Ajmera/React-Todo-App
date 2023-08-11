import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { db } from "./firebase.js";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-400 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log(input);
  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
  };

  // Read todo from firebase
  useEffect(() => {
    const getTodos = async () => {
      const todosRef = collection(db, "react-todo");
      const data = await getDocs(todosRef);
      const result = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(result);
    };
    getTodos();
  }, [todos]);

  // uodate todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "react-todo", todo.id), {
      complete: !todo.complete,
    });
  };

  // delete todo

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form} onSubmit={createTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            className={style.input}
            defaultValue="Bob"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p className={style.count}>You have these no. of todos</p>
      </div>
    </div>
  );
}

export default App;
