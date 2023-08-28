import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

const TodoList = () => {
    return (
        <>
        <div>Todo List</div>
        <TodoGroup/>
        <TodoGenerator/>
        </>
    );
}

export default TodoList;