import React from 'react'
import { createContext, useState } from "react";
import App from '../../App';


export let StepPercent = createContext()


function StepContext(props) {
    let [stepPercent , setStepPercent] = useState(0)
  return (
    <>
      <StepPercent.Provider value={{stepPercent, setStepPercent}}>
        {<App/>}
      </StepPercent.Provider>
    </>
  )
}

export default StepContext
