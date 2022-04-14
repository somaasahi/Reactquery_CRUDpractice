import { Button, CardContent, Checkbox, List, TextField } from "@mui/material";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import SearchDetail from "./SearchDetail";
import reactInfiniteScroller from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";

function InfinityScroll(props) {

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
    const { isLoading, error, data } = useQuery("testDetails", getSearch);



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
        queryClient.setQueryData("testDetails", (list) =>
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

export default InfinityScroll;
