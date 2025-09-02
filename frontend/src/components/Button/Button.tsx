import { styled } from "@mui/material";

type ButtonProps = {
    width: string;
    text?: string;
    padding?: string;
    borderRadius?: string;
    textTransform?: "capitalize" | "uppercase" | "lowercase";
    backgroundColorLight?: string;
    backgroundColorDark?: string;
    margin?: string;
    textAlign?: "center" | "left" | "right" | "justify";
    background?: 'none';
    outline?: 'none';
    height?: string;
}


const Button = styled('button')<ButtonProps>(({theme, width, margin, background, height, outline, textAlign, padding, borderRadius, textTransform, backgroundColorLight, backgroundColorDark })=>({
    width,
    padding,
    borderRadius,
    cursor: "pointer",
    fontFamily: "Poppins",
    fontWeight: "500",  
    textTransform,
    backgroundColor: theme.palette.mode === 'light' ? backgroundColorLight : backgroundColorDark,
    margin,
    color: theme.palette.mode === 'light' ? "#fff" : "#747171ff",
    textAlign,
    background,
    outline,
    height,
}))


export const ButtonComponent: React.FC<ButtonProps> = (props)=>{
    return(
        <Button {...props}>{props.text}</Button>
    )
}



