import {
  FETCHING_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_SERIES,
} from "../actions"

const initialState = {
  series: [],
  amiiboList: [],
  isLoading: false,
  error: "",
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        amiiboList: action.payload,
      }
    case FETCH_SERIES:
      return {
        ...state,
        islading: false,
        series: action.payload,
      }
    case "SELECT_SERIES":
      return {
        ...state,
        amiiboList: state.amiiboList.filter(
          (amiibo) => amiibo.amiiboSeries == action.payload
        ),
      }
    default:
      return state
  }
}
