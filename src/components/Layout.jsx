import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
