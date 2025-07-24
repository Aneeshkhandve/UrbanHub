import React, { useEffect, useState } from 'react'
import myContext from './myContext'



function myState(props) {
  const[loading,setLoading] = useState(false);
  const [mode, setMode] = useState('light');
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);
  return (
    <myContext.Provider value={{ mode, setMode,loading,setLoading }}>
      {props.children}
    </myContext.Provider>
  )
}

export default myState
