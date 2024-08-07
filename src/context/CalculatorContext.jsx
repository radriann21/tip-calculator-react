/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { CalculatorReducer } from "./CalculatorReducer";
import { actionTypes } from "./actionTypes";
import { initialState } from "./CalculatorReducer";

export const CalculatorContext = createContext(initialState)

export const CalculatorContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(CalculatorReducer, initialState)

  const setBill = (e) => {
    const bill = parseFloat(e.target.value)
    dispatch({ type: actionTypes.SET_BILL, payload: bill })
    dispatch({ type: actionTypes.CALCULATE })
  }

  const getButtonValue = (e) => {
    const percent = Number(e.target.dataset.value)
    dispatch({ type: actionTypes.SET_PERCENTAGE, payload: percent })
    dispatch({ type: actionTypes.CALCULATE })
  }

  const setPercent = (e) => {
    const percent = parseInt(e.target.value)
    dispatch({ type: actionTypes.SET_PERCENTAGE, payload: percent })
    dispatch({ type: actionTypes.CALCULATE })
  } 

  const setNumberPeople = (e) => {
    const people = parseInt(e.target.value)
    dispatch({ type: actionTypes.SET_NUM_PEOPLE, payload: people })
    dispatch({ type: actionTypes.CALCULATE })
  }

  const reset = () => {
    dispatch({ type: actionTypes.RESET })
  }

  return (
    <CalculatorContext.Provider value={{ ...state, setBill, reset, setNumberPeople, getButtonValue, setPercent }}>
      {children}
    </CalculatorContext.Provider>
  )
}

