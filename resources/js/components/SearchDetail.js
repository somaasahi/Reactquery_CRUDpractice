import { Delete } from "@mui/icons-material";
import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import React from "react";

function SearchDetail(props) {
    return (
        <ListItem key={props.id}>
            <ListItemText primary={props.detail.name} />
        </ListItem>
    );
}

export default SearchDetail;
