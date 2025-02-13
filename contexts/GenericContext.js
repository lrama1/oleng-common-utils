const React = require('react');
const { createContext, useContext, useState } = React;

const GenericContext = createContext();

const GenericProvider = ({ children, initialState }) => {
  const [state, setState] = useState(initialState);

  return (
    <GenericContext.Provider value={{ state, setState }}>
      {children}
    </GenericContext.Provider>
  );
};

const useGenericContext = () => {
  return useContext(GenericContext);
};

module.exports = { GenericProvider, useGenericContext };
