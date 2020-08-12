import React from "react"
import Header from "./components/Header"
import { Container, Box, Grid } from "@material-ui/core"
import CardList from "./components/CardList"
import Series from "./components/Series"

function App() {
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid item xs={6}>
          <Series />
        </Grid>
        <Grid item xs={6}>
          <CardList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
