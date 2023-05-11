import Footer from './Layouts/footer';
import SignIn from './components/User_SignIn';
import SignUp from './components/User_SignUp';
import { Buttons } from './components/Buttons';
import { Seller_login } from './components/Seller/Seller_login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Seller_Register } from './components/Seller/Seller_Register';
import { UserLogin } from './components/User/UserLogin';
import { UserRegister } from './components/User/UserRegister';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Seller_login />}></Route>
          <Route path="/seller_register" element={<Seller_Register />}></Route>
          <Route path="/user_login" element={<UserLogin />}></Route>
          <Route path="/user_register" element={<UserRegister />}></Route>
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
