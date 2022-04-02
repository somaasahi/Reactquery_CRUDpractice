import { Grid } from "@mui/material";
import React from "react";
import Todo from "./Todo";
import { useQuery } from "react-query";
import axios from "axios";

function getPosts() {
    return useQuery("todos", async () => {
      const { data } = await axios.get("api/todos/");
      return data;
    });
  }

function Home() {

    // const { isLoading, error, data } = useQuery('todo', async () => {
        // const { data } = await axios.get('api/todos/');
    // }
//   )

const { isLoading, error, data } = getPosts();


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
