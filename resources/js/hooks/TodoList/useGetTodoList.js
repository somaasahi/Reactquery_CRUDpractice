import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
// axiosはhttpリクエストのためのライブラリ

const getTodoList = async () => {
    const { data } = await axios.get("/api/todos");

    return data;
}

const useGetTodoList = () => {
    const queryClient = useQueryClient();
    console.log("kkkk");
    // getTodoListで取得したデータに名前をつけ、コンポーネントを跨いでも使えるようにするのがuseQuery
    // エラーが起きた際にはonErrorでtodoListにnullをセット
    return useQuery("todoList", getTodoList, {
        onError: () => {
            queryClient.setQuerysData("todoList", null);
        }
    });
}

export default useGetTodoList;
