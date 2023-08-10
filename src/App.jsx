import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Todo from "./Todo";

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
  const [inputText, setInputText] = useState("");

  let deleteTodo = (key) => {
    let newTodos = [...todos];
    newTodos.splice(key, 1);
    setTodos(newTodos);
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Add Todo"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            // onKeyDown={(e) => {if(e.key === 13){
            //   console.log(e)
            // }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTodos([...todos, inputText]);
                setInputText("");
              }
            }}
          />
          <button
            className={style.button}
            onClick={(e) => {
              e.preventDefault();
              if (inputText != "") {
                setTodos([...todos, inputText]);
                setInputText("");
              }
            }}
          >
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={deleteTodo}
              todo={todo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <p className={style.count}>You have these no. of todos</p>
      </div>
    </div>
  );
}

export default App;
