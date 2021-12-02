import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import OW_Products from './objectways_data/products.json';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const exist = cart.find((product) => product.Title === item.Title);
    if (exist) {
      setCart(cart.map((product) =>
        product.Title === item.Title ? { ...exist, qty: exist.qty + 1 } : product)
      );
    }
    else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }
  const removeFromCart = (item) => {
    const exist = cart.find((product) => product.Title === item.Title);
    if (exist.qty === 1) {
      setCart(cart.filter(
        (product) => product.Title !== item.Title
      )
      );
    }
    else {
      setCart(cart.map(
        (product) => product.Title === item.Title ? { ...exist, qty: exist.qty - 1 } : product)
      );
    }
  }
  return (
    <div className="App">
      <Header countCartItems={cart.length}></Header>
      <div className="row">
        <Main className="block col-2" addToCart={addToCart} OW_Products={OW_Products}></Main>
        <Basket addToCart={addToCart} cart={cart} removeFromCart={removeFromCart} OW_Products={OW_Products}></Basket>
      </div>
    </div>
  );
}

export default App;
