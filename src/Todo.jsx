import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitilize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitilize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

export default function Todo(props) {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{props.todo.text}</p>
      </div>
      <button>{<FaRegTrashAlt />}</button>
    </li>
  );
}
