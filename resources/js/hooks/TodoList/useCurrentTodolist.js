// useGetTodoListで取得したデータをコンポーネントで使うためのhook

import { useQueryClient } from "react-query";

const useCurrentTodoList = () => {
    const queryClient = useQueryClient();
    return queryClient.getQueryData("todoList");
    // クエリーで取得したデータにはクエリーからアクセス
};

export default useCurrentTodoList;
