import axios from "axios"

export const FETCHING_DATA_START = "FETCHING_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_SERIES = "FETCH_SERIES"
export const fetchData = (apiKey) => (dispatch) => {
  // dispatch FETCHING action
  dispatch({ type: FETCHING_DATA_START })
  // make an axios call
  axios
    .get(`https://www.amiiboapi.com/api/${apiKey}/`)
    .then((res) => {
      // inside .then(), dispatch new action with data
      // res.data
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.amiibo })
    })
    .catch((err) => console.log(err))
}

export const fetchSeries = () => (dispatch) => {
  axios.get(`https://www.amiiboapi.com/api/amiiboseries`).then((res) => {
    dispatch({ type: FETCH_SERIES, payload: res.data.amiibo })
  })
}
