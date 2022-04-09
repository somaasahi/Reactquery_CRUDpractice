import { Button, CardContent, Checkbox, List, TextField } from "@mui/material";
import { useQuery } from "react-query";
import SearchDetail from "./SearchDetail";


function SearchBox(props) {

    let search = {
        keyword: "",
        num1: false,
        num2: false,
    };

    const getSearch = async () => {
        const { data } = await axios.get("api/searchDetails/", {
            params: {
                search: search.keyword,
                num1: search.num1,
                num2: search.num2
        }
    });

        return data;
    };
    const { isLoading, error, data } = useQuery("todoDetails", getSearch);

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;


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
