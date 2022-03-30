import { Grid } from "@mui/material";
import React from "react";
import Todo from "./Todo";
import { useGetTodoList, useCurrentTodoList } from "../hooks/TodoList";
import { useQuery } from "react-query";

function Home() {

    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('/api/todos').then(res =>
      res.json()
    )
  )
  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

    return (
        <Grid container spacing={2}>
            {data.map((todo) => (
                <Grid item key={todo.id} xs={2}>
                    <Todo todo={todo} />
                </Grid>
            ))}
        </Grid>
    );
}

export default Home;
