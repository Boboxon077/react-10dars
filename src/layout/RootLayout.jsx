import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CountriesList from '../components/CountriesList'

function RootLayout() {
  return (
    <>
    <Navbar />
    <main className='cite-container'>
        <Outlet />
    </main>
    <CountriesList />
    </>


  )
}

export default RootLayout