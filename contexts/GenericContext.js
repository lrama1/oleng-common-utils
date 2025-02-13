import React, { createContext, useContext, useState } from 'react';

const GenericContext = createContext();

export const GenericProvider = ({ children, initialState }) => {
  const [state, setState] = useState(initialState);

  return (
    <GenericContext.Provider value={{ state, setState }}>
      {children}
    </GenericContext.Provider>
  );
};

export const useGenericContext = () => {
  return useContext(GenericContext);
};
