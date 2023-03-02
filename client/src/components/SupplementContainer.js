import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import data from '../data/products.json'
import SupplementCard from "./SupplementCard";

const theme = createTheme(); 

export default function SupplementContainer({inputText, setSupplementDetail}) {

    return (
        <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
       <SupplementCard data={data} inputText={inputText} setSupplementDetail={setSupplementDetail}/>
      </main>
    </ThemeProvider>
    )
}