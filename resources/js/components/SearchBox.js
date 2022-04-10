import { Button, CardContent, Checkbox, List, TextField } from "@mui/material";
import { list } from "postcss";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import SearchDetail from "./SearchDetail";


function SearchBox(props) {

    const [keyword, setKeyword] = useState("");
    const [num1, setNum1] = useState(false);
    const [num2, setNum2] = useState(false);

    const queryClient = useQueryClient();


    const getSearch = async () => {
        const { data } = await axios.get("api/searchDetails/", {
            params: {
                keyword: keyword,
                num1: num1,
                num2: num2
        }
        });
        return data;
    };
    const { isLoading, error, data } = useQuery("todoDetails", getSearch);



    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;


    const getForm = (event) => {
        setKeyword(event.target.value);
    };

    const check1 = (event) => {
        if(num1) {
            setNum1(false);
        }else{
            setNum1(true);
        }
    };
    const check2 = (event) => {
        if(num2) {
            setNum2(false);
        }else{
            setNum2(true);
        }
    };

    const searchPost = async () => {
        console.log(keyword);
        const { data } = await axios.get("api/searchDetails/", {
            params: {
                keyword: keyword,
                num1: num1,
                num2: num2
        }
        });

        await queryClient.cancelQueries("todoDetails");
        queryClient.setQueryData("todoDetails", (list) =>
        list = data
        );
    }

    return (
        <div>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={getForm}
            />
            {/* {search.num1 ? <div onClick={() => mutation.reset()}>updated!</div> : null} */}
            <div>true<Checkbox color="secondary" onClick={check1} /></div>
            <div>false<Checkbox color="success" onClick={check2} /></div>
            <Button onClick={searchPost}>seach</Button>

            <CardContent>
              <List>
                  {data.map((detail) => {
                      return <SearchDetail key={detail.id} detail={detail} />
                  })}
              </List>
          </CardContent>
        </div>
    );
}

export default SearchBox;
