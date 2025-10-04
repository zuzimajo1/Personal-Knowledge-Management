import { styled } from "@mui/material";

export const NotesStyled = styled('div')(({theme})=>({
    width: '350px',
    height: 'auto',
    alignItems: "center",
    backgroundColor: theme.palette.mode === 'light' ? '#f8f1f1ff' : '#2c2c2c',
    margin: '1rem',
    paddingTop: '1rem',
    borderRadius: '8px',
    boxShadow: theme.palette.mode === 'light' ? "0 2px 4px rgba(0,0,0,0.1)" : "0 2px 4px rgba(255,255,255,0.1)",
    position: 'relative',


    '&:hover .notes-options-section': {
        visibility: 'visible',
        transition: 'visibility 1s, opacity 1s',
        opacity: 1,
    },
}));


export const NotesOptionsSection = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    paddingRight: '1rem',
    height: '30px',
    flex: 1,
    position: 'relative',
    bottom: '0',
    visibility: 'hidden',

})

export const NotesContentSection = styled('div')({
    height: '300px',
    flex: 1,
    overflowY: 'auto',
    scrollBehavior: 'smooth',
    padding: '0 1rem',
    position: 'relative',
    
    '&:hover::-webkit-scrollbar': {
        display: "block",
        borderRadius: '8px',
        position: 'relative',
    },
    '&::-webkit-scrollbar': {
        width: '12px',
        display: "none",
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f5ededff',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#b3b3b3',
        borderRadius: '8px',
        border: '2px solid #f5ededff',
    },
})