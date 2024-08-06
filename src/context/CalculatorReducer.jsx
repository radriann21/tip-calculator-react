import { actionTypes } from "./actionTypes"

export const CalculatorReducer = (state, action) => {
  switch(action.type) {
    case actionTypes.SET_BILL:
      return {
        ...state,
        bill: action.payload
      }
    case actionTypes.SET_PERCENTAGE:
      return {
        ...state,
        percentage: action.payload
      }
    case actionTypes.SET_NUM_PEOPLE: 
      return {
        ...state,
        numberPeople: action.payload
      }
    case actionTypes.RESET: 
      return {
        ...action.payload
      }
    default: 
      return state
  }
}