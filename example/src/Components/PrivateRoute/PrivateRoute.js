import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from 'react-router-dom'
import UserProfile from '../UserProfile/UserProfile'

const PrivateRoute = ({component:RouteComponent}) => {

   const isAuth = useSelector(state=>state.userReducer.isAuth)

   if(!isAuth) return <Navigate to="/login"/>
  return (
    <div>
       <RouteComponent/>
    </div>
  )
}

export default PrivateRoute