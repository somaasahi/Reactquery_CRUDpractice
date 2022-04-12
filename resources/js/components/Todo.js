import { Card, CardContent, List, TextField } from '@mui/material';
import React from 'react';
import TodoDetail from './TodoDetail';
import axios from "axios";
import { useMutation } from "react-query";



function Todo(props) {

    const mutation = useMutation(newTodo => {
        return axios.put('api/todos/'+ todo.id, {tiele: todo.tiele});
    });

    let todo = {
      id: props.todo.id,
      tiele: props.todo.tiele,
    };

    const eventUpdateTodo = (event) => {

        todo.tiele = event.target.value;

        mutation.mutate(todo);
    };
    if (mutation.isLoading) return 'Loading...';

    if (mutation.isError) return mutation.error.message;




  return (
      <Card>
          <TextField
          variant='standard'
          margin='dense'
          defaultValue={props.todo.tiele}
          fullWidth
          onChange={eventUpdateTodo}/>
          <CardContent>
              <List>
                  {props.todo.todo_details.map((detail) => {
                      return <TodoDetail key={detail.id} detail={detail} />
                  })}
              </List>
          </CardContent>
          {mutation.isSuccess ? <div onClick={() => mutation.reset()}>updated!</div> : null}
      </Card>

  );
}

export default Todo;
