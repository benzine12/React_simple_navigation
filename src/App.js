import React from 'react'
import {
 Link, Outlet
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link> |{" "}
        <Link to="/Page1">Page1</Link> |{" "}
        <Link to="/Page2">Page2</Link> |{" "}
      </nav>
      <Outlet />
    </div>
  )
}

export default App