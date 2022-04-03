import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useMutation } from "react-query";


function TodoForm() {

    const mutation = useMutation(newTodo => {
        return axios.post('/api/todos/post',{tiele: todo.tiele});
    });

    let todo = {
        tiele: ""
      };

    const getForm = (event) => {

        todo.tiele = event.target.value;

    };

    const postForm = () => {

        mutation.mutate(todo.tiele);
    }
    if (mutation.isLoading) return 'Loading...';

    if (mutation.isError) return mutation.error.message;

    if (mutation.isSuccess) {

         console.log('ok');
    }

    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={getForm}
            />
            <Button onClick={postForm}>add</Button>
        </div>
    );
}

export default TodoForm;
