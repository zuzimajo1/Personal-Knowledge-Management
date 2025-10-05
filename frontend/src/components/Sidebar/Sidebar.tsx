import React from 'react'
import { Archive, Share, Delete,  Home, } from '@mui/icons-material'
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton} from '@mui/material'
import { SideBarBox } from '../../styles/Home.styled';

export const SideBar : React.FC = ()=>{

  const ListOptions = [
    // { text: "Create Note", icon: <Note /> },
    { text: "Home", icon: <Home />},
    { text: "Archived", icon: <Archive /> },
    { text: "Shared", icon: <Share/>  },
    { text: "Trash", icon: <Delete /> },
  ];

  return(
    <SideBarBox role='presentation'>
    <List sx={{ margin: '4rem 0 0 0'}}>
      {ListOptions.map((props, index)=>(
        <ListItem key={index}>
          <ListItemButton>
            <ListItemIcon>
              {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </SideBarBox>
  )
}
