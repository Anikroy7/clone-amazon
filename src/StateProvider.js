import React, { createContext, useContext, useReducer } from "react";


// Preprares the data layout
export const StateContext = createContext();
// console.log(StateContext, "statecontext");

export const StateProvider = ({ reducer, initialState, children }) => {
    // console.log(reducer, initialState, children, "form state provider function");
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}


export const useStateValue = () => useContext(StateContext);