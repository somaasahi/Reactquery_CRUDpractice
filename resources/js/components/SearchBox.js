import { Button, Checkbox, TextField } from "@mui/material";
import { useQuery } from "react-query";


// const getTodos = async () => {
//     const { data } = await axios.get("api/todos/");
//     return data;
// };
// function Home() {
//     const { isLoading, error, data } = useQuery("todos", getTodos);

// フックを関数の内部で使用する場合は、メソッド名をuseから始めないといけません


function SearchBox(props) {

    let search = {
        keyword: "",
        num1: false,
        num2: false,
        num3: false,
    };

    const getSearch = async () => {
        const { data } = await axios.get("api/searchDetails/", {
            params: {
                search: search.keyword,
                num1: search.num1,
                num2: search.num2,
                num3: search.num3
        }
    });
        console.log(data);
        return data;
    };
    const { isLoading, error, data } = useQuery("todoDetails", getSearch);



    const getForm = (event) => {
        search.keyword = event.target.value;
    };

    const check1 = (event) => {
        if(search.num1) {
            search.num1 = false;
        }else{
            search.num1 = true;
        }
    };
    const check2 = (event) => {
        if(search.num2) {
            search.num2 = false;
        }else{
            search.num2 = true;
        }
    };
    const check3 = (event) => {
        if(search.num3) {
            search.num3 = false;
        }else{
            search.num3 = true;
        }
    };

    const searchPost = () => {

    }


    return (
        <div>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={getForm}
            />
            {search.num1 ? <div onClick={() => mutation.reset()}>updated!</div> : null}
            <Checkbox color="secondary" onClick={check1} />
            <Checkbox color="success" onClick={check2} />
            <Checkbox color="default" onClick={check3} />
            <Button onClick={searchPost}>seach</Button>
        </div>
    );
}

export default SearchBox;
