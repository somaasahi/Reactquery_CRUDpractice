import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useQueryClient, useMutation } from "react-query";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoForm() {
    const [error, setError] = useState(false);

    const queryClient = useQueryClient();

    const mutation = useMutation(
        () =>
            axios.post("/api/todos/post", { tiele: todo.tiele }).then((res) => {
                let response = res.data;

                toast.info(response.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }),
        {
            onSettled: () => {
                queryClient.invalidateQueries("todos");

            },
        }
    );

    let todo = {
        tiele: "",
    };

    const getForm = (event) => {
        todo.tiele = event.target.value;
    };

    const postForm = (event) => {
        mutation.mutate();
    };
    const errorCut = (event) => {
        console.log(error);
    };

    // if (mutation.isLoading) return 'Loading...';

    if (mutation.isError) return mutation.error.message;

    return (
        <div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={getForm}
            />
            <Button onClick={postForm}>add</Button>
            {error ? <div onClick={errorCut}>Error!</div> : null}
        </div>
    );
}

export default TodoForm;
