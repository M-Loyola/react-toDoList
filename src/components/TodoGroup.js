import '../App.css';
import TodoItem from "./TodoItem";

const TodoGroup= (props) => {
    return (
        <div className="todoGroup">
            {props.todoListItems.map((item, index) => <TodoItem key={index} input={item}/>)}
        </div>
    );
}

export default TodoGroup;