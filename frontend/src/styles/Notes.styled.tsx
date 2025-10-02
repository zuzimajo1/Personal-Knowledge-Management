import { styled } from "@mui/material";

export const NotesStyled = styled('div')(({theme})=>({
    width: '300px',
    height: '300px',
    alignItems: "center",
    backgroundColor: theme.palette.mode === 'light' ? '#f8f1f1ff' : '#2c2c2c',
    margin: '1rem',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: theme.palette.mode === 'light' ? "0 2px 4px rgba(0,0,0,0.1)" : "0 2px 4px rgba(255,255,255,0.1)",
    position: 'relative',

    '&:hover::-webkit-scrollbar': {
        display: "block",
        transform: "scale(1.2)",
        transition: "transform 0.2s",
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

}));


export const NotesOptionsSection = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    height: '20px',
    width: '100%',
    border: '1px solid red',
    position: 'absolute',
    bottom: '0',
})