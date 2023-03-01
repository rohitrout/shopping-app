import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/product/:id',
      element:<Product/>
    },
    {
      path:'/products/:id',
      element:<Products/>
    }
  ]
  },
  
])

function App() {
  return (
    //outlet
    //browser router-> routes -> route
    <>
    <RouterProvider router={router}/>
    <div className="App">
     
    </div>
    </>
  );
}

export default App;
