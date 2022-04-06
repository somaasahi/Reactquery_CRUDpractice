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

    const mutation = useMutation(updateTodo, {
        // When mutate is called:
        // onMutate: async newTodo => {
        //   // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        //   await queryClient.cancelQueries('todos')

        //   // Snapshot the previous value
        //   const previousTodos = queryClient.getQueryData('todos')

        //   // Optimistically update to the new value
        //   queryClient.setQueryData('todos', old => [...old, newTodo])

        //   // Return a context object with the snapshotted value
        //   return { previousTodos }
        // },
        // // If the mutation fails, use the context returned from onMutate to roll back
        // onError: (err, newTodo, context) => {
        //   queryClient.setQueryData('todos', context.previousTodos)
        // },
        // Always refetch after error or success:
        onSettled: () => {
          queryClient.invalidateQueries('todos')
        },
      });

    const deleteTodoDetail = (event) => {

        mutation.mutate();
    };

    if (mutation.isLoading) return 'Loading...';

    if (mutation.isError) return mutation.error.message;

    if (mutation.isSuccess) {

        //  console.log('ok');
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
