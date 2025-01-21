import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Menu from "./components/Menu";
import About from "./components/About";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import RestrurantMenu from "./components/RestrurantMenu";
// import Grocery from "./components/Grocery";
import {lazy} from 'react';


// To reduce the bundler size (distribution of large application in smaller chunks) it can be done by lazy loading
//Dynamic bunding
// lazy loading  which means intially it not loads the all component it will load when we click on that route
//chunking
//spliting component

const Grocery=lazy(()=> import('./components/Grocery'));

// App layout
function App() {
  return (
  <div className="App">
    <Header/>
    <Outlet/>
  </div>
  );
}

export const appRouter=createBrowserRouter(
  [
        
        {
          path:"/",
          element:<App/>,
          children:[
            {
              path:"/",
              element: (
               <>
                <Menu />
                <Body />
                
               </>
        ),
            },
            {
              path:"/about",
              element:<About/>,
            },
            {
              path:"/contact",
              element:<Contactus/>,
            },
             
            {
              path:"/restrurant/:resId",
              element:<RestrurantMenu/>
            },

            {
              path:"/grocery",
              element:<Grocery/>

            },
          ]
        },
        
  ]);

export default App;
