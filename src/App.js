import Dishes from "./components/dishes/dishes";
import Filters from "./components/filters/filters";
import ShoppingCart from "./components/shopping-cart/shopping-cart";
import './App.css';

export default function App() {
    return <>
        <div className="vertical block">
            <Filters/>
            <ShoppingCart/>
        </div>
        <Dishes/>
    </>
}