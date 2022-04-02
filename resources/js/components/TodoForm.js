import { Button, TextField } from "@mui/material";

function TodoForm() {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
            />
            <Button>add</Button>
        </div>
    );
}

export default TodoForm;
