import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useQueryClient, useMutation } from "react-query";
import { useState } from "react";
import { isSet } from "lodash";




function TodoForm() {

    const [error, setError] = useState(false);

    const queryClient = useQueryClient();

    const mutation = useMutation(
        () =>
        axios.post("/api/todos/post",{tiele: todo.tiele}).then((res) => {
            let response = res.data;
            if(response.error !== 'undefined'){
                setError(true);
            }


            }),
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
    const errorCut = (event) => {

        console.log(error);
    }


    // if (mutation.isLoading) return 'Loading...';

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
            { error ? <div onClick={errorCut} style>Error!</div> : null}
        </div>
    );
}

export default TodoForm;
