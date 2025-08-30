import React from 'react'
import { styled, Typography } from '@mui/material'


type Props = {
    text: string;
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | undefined;
    fontWeight?: "400" | "500" | "600";
    padding?: string;
    lightcolor?: string;
    darkcolor?: string;
    textTransform?: "capitalize" | "uppercase" | "lowercase";
    fontSize?: string;
    line?: string;
    textAlign: "center" | "left" | "right" | "justify";

}


const Text =  styled(Typography)<Props>(({theme, fontWeight, padding, lightcolor, darkcolor, textTransform, fontSize,line})=>({
    fontSize,
    padding,
    textTransform,
    fontWeight,
    fontFamily: "Poppins",
    color: theme.palette.mode === "light" ? lightcolor : darkcolor,
    textDecoration: line,

}))




export const TypographyText: React.FC<Props> = (props) => {
  return (
    <Text {...props}>{props.text}</Text>
  )
}


