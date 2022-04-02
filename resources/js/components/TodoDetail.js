import { Delete } from "@mui/icons-material";
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { QueryClient, useMutation } from "react-query";


const client = new QueryClient();

function TodoDetail(props) {

    const mutation = useMutation(newTodo => {
        return axios.delete('api/todoDetails/'+ props.detail.id);
    });

    // let todo = {
    //     id: props.detail.id,
    //   };

    const deleteTodoDetail = () => {
        mutation.mutate(props.detail.id);
    };
    if (mutation.isLoading) return 'Loading...';

    if (mutation.isError) return mutation.error.message;

    if (mutation.isSuccess) {

         client.invalidateQueries('todos');
    }
    return (
        <ListItem
            key={props.id}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={deleteTodoDetail}
                >
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox />
                </ListItemIcon>
                <ListItemText primary={props.detail.name} />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoDetail;
