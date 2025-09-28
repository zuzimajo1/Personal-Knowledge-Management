import { styled } from "@mui/material";

export interface ContainerProp {
    display?: string;
    vertical?: boolean;
    flexDirection?: string;
    justifyContent?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";
    width?: "100%" | "auto" | string;
    height?: "100vh" | "auto" | string;
    padding?: string;
    border?: string;
    backgroundColorLight?: string;
    backgroundColorDark?: string;
    borderRadius?: string;
    margin?: string;
    position?: "relative" | "absolute" | "fixed" | "sticky" | "static";
    top?: string,
}


export const Container = styled('div')<ContainerProp>((props)=>({
    display: props.display,
    width: props.width,
    height: props.height,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    padding: props.padding,
    border: props.border,
    margin: props.margin,
    borderRadius: props.borderRadius,
    flexDirection : props.vertical ? "column" : "row",
    backgroundColor: props.theme.palette.mode === "light" ? props.backgroundColorLight : props.backgroundColorDark,
    position: props.position,
    top: props.top,
}))

export const AuthSection = styled('section')({
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

})

export const MainContainer = styled('main')(({theme})=>({
    flex: 1,
    width: "100vw",
    height: "100vh",
    overflowY: "auto",
    backgroundColor: theme.palette.mode === "light" ? "rgba(106,200,225,255)" : "rgba(14,51,95,255)",
}))


export const AutoVerticalContainer = styled('div')({
    display: "flex",
    height: "auto",
    flexDirection: "column",
})


export const GridContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
})
