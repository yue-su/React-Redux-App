import { FETCHING_DATA_START, FETCH_DATA_SUCCESS } from "../actions"

const initialState = {
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
    default:
      return state
  }
}
