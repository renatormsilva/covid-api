import React, { useState, useContext } from 'react';

const defaultValue = {
  states: [],
  selectedStates: {}
};

const StateContext = React.createContext(defaultValue);

export const useStateContext = () => useContext(StateContext)

const StateContextProvider = ({ children }) => {
    const [states, setStates] = useState();
    const [selectedStates, setSelectedStates] = useState();

    return (
        <StateContext.Provider value={{ states, setStates, selectedStates, setSelectedStates }}>
          {children}
        </StateContext.Provider>
    )
}



export default StateContextProvider