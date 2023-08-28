import TodoItem from "./TodoItem";

const TodoGroup= (props) => {
    return (
        <div>
            {props.todoListItems.map((item, index) => <TodoItem key={index} input={item}/>)}
        </div>
    );
}

export default TodoGroup;