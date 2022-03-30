import { Card, CardContent, List, TextField } from '@mui/material';
import React from 'react';
import TodoDetail from './TodoDetail';
import { useState } from "react";
// import { useUpdateTodoMutateTask } from "../hooks/Todo/useUpdateTodoMutateTask";
import axios from "axios";
import { useMutation } from "react-query";



function Todo(props) {

    const mutation = useMutation(newTodo => axios.put('api/todos/'+ todo.id, {tiele: todo.tiele}));

    const [timer, setTimer] = useState(null);

    let todo = {
      id: props.todo.id,
      tiele: props.todo.tiele,
    };

    // const { updateTodoMutation } = useUpdateTodoMutateTask();
    const eventUpdateTodo = (event) => {
      clearTimeout(timer);

      const newTimer = setTimeout(() => {

        todo.tiele = event.target.value;
console.log(todo);
        mutation.mutate(todo);
      }, 500);

      setTimer(newTimer);
    };

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
      </Card>

  );
}

export default Todo;
