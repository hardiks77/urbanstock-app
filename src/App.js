import React from "react";
import './App.css';
import Cart from "./components/Cart/Cart";
import mlogo from "./images/mlogo.png";
import List from "./components/List/List";
import Login from "./components/Login/Login";
import { CartProvider } from "./CartContext";
import { ThemeContext } from "./ThemeContext";
import { ListProvider, ListContext } from "./components/List/ListContext";
import CartContent from "./components/Cart/CartContent";


function App() {

  const [theme, changeTheme] = React.useContext(ThemeContext);

  const [showCart, cartShowChange] = React.useContext(ListContext);

  const [userName, setUserName] = React.useState(JSON.parse(localStorage.getItem("userName")) || null);

  function changeData(data) {
    localStorage.setItem("userName", JSON.stringify(data));

    setUserName(data);
  }

  function handleLogout() {
    localStorage.removeItem("userName");
    setUserName(null);
  }

  return (

    <CartProvider>
      <div className={`App ${theme}`}>
        {
          userName ?
            <>
              <header className="App-header">
                <div className="left-header">
                  <img src={mlogo} alt="image" />
                  <h1><span id="head-span1">Urban</span><span id="head-span2">Stock</span></h1>
                </div>
                <div className="right-header">
                  <Cart />
                  <label className="switch">
                    <input type="checkbox" onChange={changeTheme} />
                    <span className="slider round"></span>
                  </label>
                  <button
                    href=""
                    className="logout-linkButton"
                    onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </header>



              <div className="body-container">
                {

                  showCart ? <CartContent /> : <List />


                }
              </div>






            </> :
            <Login changeData={changeData} />
        }


      </div>
    </CartProvider>

  );
}

export default App;
