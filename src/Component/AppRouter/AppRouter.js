import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddessDetails from '../AddressDetails/AddessDetails'
import FirstForm from '../firstFormPage/FirstForm'
import ResultUserData from '../Result/ResultUserData'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<FirstForm/>}></Route>
    
      </Routes>
    </div>
  )
}

export default AppRouter
