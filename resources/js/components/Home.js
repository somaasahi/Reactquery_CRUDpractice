import { Grid } from "@mui/material";
import React from "react";
import Todo from "./Todo";
import { useQuery } from "react-query";
import axios from "axios";
import TodoForm from "./TodoForm";
import SearchBox from "./SearchBox";

// function getPosts() {
//     return useQuery("todos", async () => {
//       const { data } = await axios.get("api/todos/");
//       return data;
//     });
//   }パターン１

const getTodos = async () => {
    const { data } = await axios.get("api/todos/");
    return data;
};

function Home() {
    // const { isLoading, error, data } = useQuery('todo', async () => {
    // const { data } = await axios.get('api/todos/');
    // }
    //   )パターン１−２

    // const { isLoading, error, data } = getTodos();パターン１

    const { isLoading, error, data } = useQuery("todos", getTodos);

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <TodoForm />
            <Grid container spacing={2}>
                {data.map((todo) => (
                    <Grid item key={todo.id} xs={2}>
                        <Todo todo={todo} />
                    </Grid>
                ))}
            </Grid>
            <SearchBox />
        </div>
    );
}

export default Home;
