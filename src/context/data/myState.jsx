import React, { useEffect, useState } from 'react'
import myContext from './myContext'



function myState(props) {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);
  return (
    <myContext.Provider value={{ mode, setMode }}>
      {props.children}
    </myContext.Provider>
  )
}

export default myState
