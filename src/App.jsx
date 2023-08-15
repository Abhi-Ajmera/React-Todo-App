import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { db } from "./firebase.js";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

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

  // Get Todo
  const getTodos = async () => {
    const data = await getDocs(collection(db, "react-todo"));
    let todoArray = [];
    data.forEach((doc) => {
      todoArray.push({ ...doc.data(), id: doc.id });
    });
    setTodos(todoArray);
  };

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter input");
      return;
    }
    await addDoc(collection(db, "react-todo"), {
      text: input,
      complete: false,
    });
    setInput("");
    getTodos();
  };

  // read todo from firebase
  useEffect(() => {
    getTodos();
  }, []);

  // update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "react-todo", todo.id), {
      complete: !todo.complete,
    });
    getTodos();
  };

  // delete todo
  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "react-todo", todo.id));
    getTodos();
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            type="text"
            placeholder="Add Todo"
            className={style.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <p className={style.count}>{`You have ${todos.length} no. of todos`}</p>
      </div>
    </div>
  );
}

export default App;
