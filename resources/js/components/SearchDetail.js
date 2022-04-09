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
        <ListItem
            key={props.id}
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox />
                </ListItemIcon>
                <ListItemText primary={props.detail.name} />
            </ListItemButton>
        </ListItem>
    );
}

export default SearchDetail;
