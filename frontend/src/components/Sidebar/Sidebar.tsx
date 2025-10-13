import React from 'react'
import { Archive, Share, Delete,  Home, } from '@mui/icons-material'
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton} from '@mui/material'
import { SideBarBox } from '../../styles/Home.styled';
import { NavLink } from 'react-router';

interface Props {
  path: string;
}

export const SideBar : React.FC<Props> = (props)=>{

  const ListOptions = [
    { text: "Home", icon: <Home />, link: "/"},
    { text: "Archived", icon: <Archive />, link: "/archive" },
    { text: "Shared", icon: <Share/>, link: "/shared"  },
    { text: "Trash", icon: <Delete />, link: "/trash" },
  ];

  return(
    <SideBarBox role='presentation'>
    <List sx={{ margin: '4rem 0 0 0'}}>
      {ListOptions.map(({text, icon, link}, index)=>(
        <ListItem key={index}>
          <NavLink to={link} style={{ width: '100%', textDecoration: 'none', color: 'inherit', backgroundColor: props.path === link ? '#c5bebeff' : 'inherit' }}>
          <ListItemButton>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
    </SideBarBox>
  )
}
