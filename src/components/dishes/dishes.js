import { dishesData } from "../../data/dishes";
import DishCard from "./dish-card";

export default function Dishes() {
    return <div className="dishes block">
        {dishesData.map(({id, name, price, img}) => {
            return <DishCard key={id} name={name} price={price} image={img}/>
        })}
    </div>
}