/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { CalculatorReducer } from "./CalculatorReducer";
import { actionTypes } from "./actionTypes";

const initialState = {
  bill: 0.00,
  percentage: 0,
  numberPeople: 0,
  isZeroNumberPeople: null,
  tipAmount: 0.00,
  total: 0.00
}

export const CalculatorContext = createContext(initialState)

export const CalculatorContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(CalculatorReducer, initialState)

  const setBill = (e) => {
    const bill = parseFloat(e.target.value)
    dispatch({ type: actionTypes.SET_BILL, payload: bill })
  }

  const setNumberPeople = (e) => {
    const people = parseInt(e.target.value)
    dispatch({ type: actionTypes.SET_NUM_PEOPLE, payload: people })
  }

  const getButtonValue = (e) => {
    const percent = Number(e.target.dataset.value)
    dispatch({ type: actionTypes.SET_PERCENTAGE, payload: percent })
  }

  const setPercent = (e) => {
    const percent = e.target.value
    dispatch({ type: actionTypes.SET_PERCENTAGE, payload: percent })
  } 

  const reset = () => {
    dispatch({ type: actionTypes.RESET, payload: initialState })
  }

  return (
    <CalculatorContext.Provider value={{ ...state, setBill, reset, setNumberPeople, getButtonValue, setPercent }}>
      {children}
    </CalculatorContext.Provider>
  )
}
