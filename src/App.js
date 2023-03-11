import React from 'react'
import './App.css'
import AppRouter from './Component/AppRouter/AppRouter'
import FirstForm from './Component/firstFormPage/FirstForm'
import { StepProgressBar } from './Component/ProgressSteps/ProgressSteps'

const App = () => {
  return (
    <div>
     <StepProgressBar/>
     <AppRouter/>
    </div>
  )
}

export default App
