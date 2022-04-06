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
import { useQueryClient, useMutation } from "react-query";


function TodoDetail(props) {

    const queryClient = useQueryClient();

    const mutation = useMutation(
        () =>
        axios.delete('api/todoDetails/'+ props.detail.id),
        {
        onSettled: () => {
            queryClient.invalidateQueries("todos");
        },
        }
    );

    const deleteTodoDetail = (event) => {

        mutation.mutate();
    };

    if (mutation.isLoading) return 'Loading...';

    if (mutation.isError) return mutation.error.message;

    if (mutation.isSuccess) {

         console.log('ok');
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
