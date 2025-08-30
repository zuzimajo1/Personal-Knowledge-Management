import { styled, TextField } from "@mui/material";


export const Form = styled('form')({
    display: "flex",
    flexDirection: "column",
    height: "auto",

});


export const Input = styled(TextField)({

    width: "100%",
    margin: "var(--padding-xs) 0",

})