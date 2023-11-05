// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import LogIn from "./Pages/LogIn"
import Header from "./Components/Header"

export default function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/log-in" element={<LogIn/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}
