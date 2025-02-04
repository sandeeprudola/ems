import React, { createContext, useContext, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext= createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)
  const data=getLocalStorage()
  console.log(data)
  return (

    <AuthContext.Provider value={"Sandeep"}>
        {children}
    </AuthContext.Provider>

  )
}

export default AuthProvider