import React from "react"
import {
  Typography,
  Box,
  Paper,
  Avatar,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core"

const Amiibo = (props) => {
  return (
    <Box
      m={1}
      width="100px"
      height="200px"
      elevation={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      boxShadow={1}
      borderRadius="10px"
    >
      <Card elevation={0}>
        <CardMedia component="img" src={props.amiibo.image} />
        <CardContent></CardContent>
      </Card>
      <Typography variant="subtitle2" align="center">
        {props.amiibo.name}
      </Typography>
    </Box>
  )
}

export default Amiibo
