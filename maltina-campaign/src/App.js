import React, { useEffect, useState } from "react";
import Spinner from "./components/Spinner/Spinner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import ScrollToTop from "./components/NavMenu/ScrollToTop";
import Home from "./pages/Home";
import RegisterLogin from "./components/Register/RegisterLogin";
import Login from "./components/Register/Login";
import ImageInput from "./components/ImageGenerator/ImageInput";
import Footer from "./components/Footer/Footer";
import Terms from "./pages/Terms";
import Cookie from "./pages/Cookie";
import Privacy from "./pages/Privacy";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Csr from "./components/Register/Csr";
import ForgotPassword from "./components/Register/ForgotPassword";


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    //comment
    <div className="App">
      <BrowserRouter>
      {loading ? <Spinner /> : 
      <div className="page-app">
        <ToastContainer />
        <NavMenu />
        <ScrollToTop />

        <Routes>
          <Route index path='/' element={<Home />}></Route>

          <Route path='/register' element={<RegisterLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/csr' element={<Csr />} />
          <Route path="/forgot-password" component={ForgotPassword} />

          <Route path='/entry' element={<ImageInput />} className='imginput' />

          <Route path='/terms' element={<Terms />} />
          <Route path='/cookie' element={<Cookie />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>

        
        <Footer />
      </div>
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
