import React from 'react'
import { styled, Typography } from '@mui/material'


type TextProps = {
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
    margin?: string;
    border?: string;

}


const Text =  styled(Typography)<TextProps>(({theme, fontWeight, margin, padding, lightcolor, darkcolor, textTransform, fontSize,line, border})=>({
    fontSize,
    padding,
    textTransform,
    fontWeight,
    fontFamily: "Poppins",
    color: theme.palette.mode === "light" ? lightcolor : darkcolor,
    textDecoration: line,
    margin,
    border,
}))




export const TypographyText: React.FC<TextProps> = (props) => {
  return (
    <Text {...props}>{props.text}</Text>
  )
}


