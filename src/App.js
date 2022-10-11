import { CssBaseline } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import ContactUs from "./pages/ContactUs";
import WishList from "./pages/WishList";
import SingIn from "./pages/SingIn";
import { Box } from "@mui/system";
import SubMenu from "./components/navbar/SubMenu";
import NavbarPlay from "./components/playground/navbar/NavbarPlay";
import SingUp from "./pages/SingUp";


function App() {
  return (
    <>
    {/* <NavbarPlay/> */}
    {/* <SubMenu/> */}
        <BrowserRouter>
        <CssBaseline>
          <Box component="main" sx={{ p: 1 }}>
            <Navbar></Navbar>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/wishlist" element={<WishList />} />
              <Route path="/singin" element={<SingIn />} />
              <Route path="/singup" element={<SingUp />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </Box>
        </CssBaseline>
      </BrowserRouter> 
    </>
  );
}

export default App;
