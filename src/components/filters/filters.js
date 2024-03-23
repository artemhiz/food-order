import { dishesData } from "../../data/dishes";
import Category from "./category";

export default function Filters() {
    const categoriesList = dishesData.map(item => item.category).filter((value, index, self) => {
        return self.indexOf(value) === index;
    })

    return <div className="filters">
        <h1>What kind of food do you like?</h1>
        {categoriesList.map(category => <Category category={category}/>)}
    </div>
}