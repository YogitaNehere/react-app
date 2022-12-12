
//import logo from './logo.svg';
// import './App.css';
import {
  createBrowserRouter, 
  RouterProvider, 
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import ProductCard from './components/ProductCard/ProductCard';
import Home from "./container/Home/Home";
import ContactUs from './container/ContactUs/ContactUs';
import AboutUs from "./container/AboutUs/AboutUs";
import Register from "./container/Register/Register";
import NotFound from "./container/NotFound/NotFound";
import Product from "./container/Product/Product";
// const App = () => {
//   let userName = "John Doe";
//   let address = "ABC street";
//   console.log(userName);
//   return (
//     <div className="App">
//       Hello {userName},
//       <p>address: {address}</p>
//     </div>
//   );
// }
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/contact-us",
//     element: <ContactUs />,
//   },
//   {
//     path: "/about-us",
//     element: <AboutUs />,
//   },
// ]);

const App = (props) => {
  return (
    <div className='App'>
      {/* <Header />
      <RouterProvider router={router} />
      <Footer /> */}

      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  )
}
export default App;
