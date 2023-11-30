import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Detail from "./components/home/components/Detail"
import Available from "./pages/Available"
import Register from "./pages/Register"
import RegisterRouteGuard from "./components/guards/RegisterRouteGuard"
import RegisterSuccessful from "./components/register/RegisterSuccessful"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="detail/:id" element={<Detail/>}/>
          <Route path="search" element={<Available/>}/>
          <Route path="register" element={<RegisterRouteGuard><Register/></RegisterRouteGuard>}/>
          <Route path="success" element={<RegisterSuccessful/>}/>
        </Route>        
      </Routes>
    </Router>
  )
}

export default App
