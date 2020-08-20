import React from "react"
import Header from "./components/Header"
import { Box, Grid } from "@material-ui/core"
import CardList from "./components/CardList"
import Series from "./components/Series"

function App() {
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid item xs={3} md={5}>
          <Series />
        </Grid>
        <Grid item xs={9} md={7}>
          <CardList />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
