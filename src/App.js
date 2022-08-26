
import {CartProvider} from './provider/cart';
import Home from './components/Home/index'
function App() {
  return (
    <CartProvider>
        <Home/>
    </CartProvider>

  );
}

export default App;
