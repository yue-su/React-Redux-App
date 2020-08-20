import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchSeries, seriesSelect } from "../store"
import { Button, Box } from "@material-ui/core"

const Series = () => {
  const dispatch = useDispatch()
  const series = useSelector((state) => state.series)

  useEffect(() => {
    dispatch(fetchSeries())
  }, [])

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {series.map((item) => {
        return (
          <Box key={item.key} m={1} width="40%">
            <Button
              onClick={() => dispatch(seriesSelect(item.name))}
              fullWidth
              color="secondary"
              variant="contained"
            >
              {item.name}
            </Button>
          </Box>
        )
      })}
    </Box>
  )
}

export default Series
