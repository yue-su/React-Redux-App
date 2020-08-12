import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Card from "./Card"
import { fetchData } from "../store"
import { Box } from "@material-ui/core"

const CardList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData("amiibo"))
  }, [])

  const amiiboList = useSelector((state) => state.amiiboList)
  const isLoading = useSelector((state) => state.isLoading)

  return (
    <Box
      justifyContent="space-around"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
    >
      {amiiboList.map((amiibo) => {
        return <Card key={amiibo.tail} amiibo={amiibo} />
      })}
    </Box>
  )
}

export default CardList
