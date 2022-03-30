import axios from "axios";
import { useMutation } from "react-query";


const useUpdateTodoMutateTask = () => {
    const useUpdateTodoMutation = useMutation((todo) => axios.put("api/todos/" + todo.id, {tiele: todo.tiele}));
    return { useUpdateTodoMutation };
}

export default useUpdateTodoMutateTask;
