import React from 'react'
import { Typography } from '@material-ui/core'

const Card = props => {

    return (
            <Typography>{props.amiibo.name}</Typography>
    )
}

export default Card
