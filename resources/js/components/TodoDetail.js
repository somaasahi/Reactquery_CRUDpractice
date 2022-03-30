import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

function TodoDetail (props) {
  return (
    <ListItem
    key={props.id}
    secondaryAction={
        <IconButton edge="end" aria-label='delete'>
            <Delete />
            </IconButton>
    }
    disablePadding>
<ListItemButton>
    <ListItemIcon>
        <Checkbox />
    </ListItemIcon>
    <ListItemText primary={props.detail.name}/>
</ListItemButton>
</ListItem>

  );
}

export default TodoDetail;
