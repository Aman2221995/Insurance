import React, { createContext,useState } from 'react'

export const Reinsurer = createContext();

const TreatyContext = ({children}) => {
    const [tdata, setTdata] = useState(null);
  return (
    <Reinsurer.Provider value={{ tdata, setTdata }}>
      {children}
    </Reinsurer.Provider>
  )
}

export default TreatyContext;