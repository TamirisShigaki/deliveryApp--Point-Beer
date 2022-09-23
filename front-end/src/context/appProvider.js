import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import AppContext from './appContext';

function AppProvider({ children }) {
  const [total, setTotal] = useState(0);

  const contextValue = useMemo(() => ({
    total,
    setTotal,
  }), [total]);

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};

export default AppProvider;
