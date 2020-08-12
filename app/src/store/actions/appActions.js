import axios from "axios"

export const FETCHING_DATA_START = "FETCHING_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const fetchData = () => (dispatch) => {
  // dispatch FETCHING action
  dispatch({ type: FETCHING_DATA_START })
  // make an axios call
  axios
    .get("https://www.amiiboapi.com/api/amiibo/")
    .then((res) => {
      // inside .then(), dispatch new action with data
      // res.data
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.amiibo })
    })
    .catch((err) => console.log(err))
}

