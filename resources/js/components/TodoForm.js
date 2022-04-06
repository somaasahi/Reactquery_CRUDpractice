import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useQueryClient, useMutation } from "react-query";




function TodoForm() {

    const queryClient = useQueryClient();

    const mutation = useMutation(
        () =>
        axios.post("/api/todos/post",{tiele: todo.tiele}),
        {
        onSettled: () => {
            queryClient.invalidateQueries("todos");
        },
        }
    );

    let todo = {
        tiele: ""
    };

    const getForm = (event) => {

        todo.tiele = event.target.value;
    };

    const postForm = (event) => {

        mutation.mutate();
    }

    if (mutation.isLoading) return 'Loading...';

    if (mutation.isError) return mutation.error.message;



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
