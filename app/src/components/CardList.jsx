import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Amiibo from "./Card"
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
      p={3}
      border={3}
      borderColor="secondary.main"
      borderRadius="15px"
      justifyContent="space-around"
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
    >
      {amiiboList.map((amiibo) => {
        return <Amiibo key={amiibo.tail} amiibo={amiibo} />
      })}
    </Box>
  )
}

export default CardList
