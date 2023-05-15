import Footer from './Layouts/footer';
import SignIn from './components/User_SignIn';
import SignUp from './components/User_SignUp';
import { Buttons } from './components/Buttons';
import { Seller_login } from './components/Seller/Seller_login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Seller_Register } from './components/Seller/Seller_Register';
import { UserLogin } from './components/User/UserLogin';
import { UserRegister } from './components/User/UserRegister';
import AddNewProduct from './components/Seller/AddNewProduct';
import AddMart from './components/Seller/AddMart';
import Currentlocation from './components/location/Currentlocation';
import Places from './components/location/places';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" exact element={<Places />}></Route> */}
          <Route path="/" exact element={<Currentlocation />}></Route>
          <Route path="/addmart" element={<AddMart />}></Route>
          <Route path="/seller_login" element={<Seller_login />}></Route>
          <Route path="/seller_register" element={<Seller_Register />}></Route>
          <Route path="/user_login" element={<UserLogin />}></Route>
          <Route path="/user_register" element={<UserRegister />}></Route>
          <Route path="/newproduct" element={<AddNewProduct />}></Route>
        </Routes>
      </BrowserRouter>


      {/* <Footer /> */}
      {/* <SignIn /> */}
      {/* <Seller_login /> */}
      {/* <SignUp /> */}
      {/* <Buttons /> */}

    </>
  );
}

export default App;
