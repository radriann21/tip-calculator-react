/* eslint-disable react-refresh/only-export-components */
import { actionTypes } from "./actionTypes"

export const initialState = {
  bill: "",
  percentage: "",
  numberPeople: 1,
  tipAmount: 0,
  total: 0
}

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
    case actionTypes.CALCULATE: {
      if (state.numberPeople === 0 || state.numberPeople === "") {
        return {
          ...state,
          tipAmount: 0,
          total: 0
        }
      }

      const tip = ((state.bill / 100) * state.percentage) / state.numberPeople
      const total = (state.bill / state.numberPeople) + tip

      return {
        ...state,
        tipAmount: tip,
        total: total
      }
    }
    case actionTypes.RESET: 
      return {
        ...state,
        bill: "",
        percentage: "",
        numberPeople: 1,
        tipAmount: 0,
        total: 0
      }
    default: 
      return state
  }
}