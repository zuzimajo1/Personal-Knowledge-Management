import { Box, styled } from "@mui/material";

export const HomeContainer = styled('main')(({theme})=>({
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.mode === 'light' ? "#DDEFFD" : "#1A072D",
})) 


export const NavbarContainer = styled('nav')(({theme})=>({
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.mode === 'light' ? "#fff" : "#000",
    boxShadow: theme.palette.mode === 'light' ? "0 2px 4px rgba(0,0,0,0.1)" : "0 2px 4px rgba(255,255,255,0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,   
    display: "flex",
    alignItems: "center",
    padding: "var(--padding-sm)",

}))

export const SideBarBox = styled(Box)(({theme})=>({
    width: 250, 
    height: "100%",
    backgroundColor: theme.palette.mode === 'light' ? "#fff" : "#000",
    boxShadow: theme.palette.mode === 'light' ? "0 2px 4px rgba(0,0,0,0.1)" : "0 2px 4px rgba(255,255,255,0.1)",
}))