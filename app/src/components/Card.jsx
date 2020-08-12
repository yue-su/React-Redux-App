import React from "react"
import { Typography, Box, Paper, Avatar } from "@material-ui/core"

const Card = (props) => {
  return (
    <Box elevation={5} width="100px">
      <Avatar size="large" src={props.amiibo.image}></Avatar>
      <Typography variant="subtitle2">{props.amiibo.name}</Typography>
    </Box>
  )
}

export default Card
