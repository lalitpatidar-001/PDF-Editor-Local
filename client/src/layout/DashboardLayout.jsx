import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


/*
  DashboardLayout component:
    * Render nested component of DashboardLayout Route
    * if user is not logged in redirect to AuthLayout
*/

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
  const navigate = useNavigate();

  if (!isLoggedIn) return <Navigate to="/auth/login" />

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default DashboardLayout