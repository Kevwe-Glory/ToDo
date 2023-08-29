import React from 'react'
import Onboarding from './Component/Onboarding'
import Home from './Component/Home'
import Account from './Component/Account'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import NotFound from './Component/NotFound'
import Setting from './Component/Setting'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Onboarding />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/account' element={<Account />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='*' element={<NotFound />}/>
      <Route path='/setting' element={<Setting />}/>
    </Routes>
  )
}
export default App