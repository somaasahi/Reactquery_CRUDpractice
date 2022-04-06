import { Button, Checkbox, TextField } from "@mui/material";

function SearchBox(props) {
    let search = {
        keyword: "",
        num1: false,
        num2: false,
        num3: false,
    };

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

    const searchPost = (event) => {
        // mutation.mutate();
        console.log(search);
    };

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
