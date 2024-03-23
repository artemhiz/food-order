import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishes-slice";

export default function Category({category}) {
    const selectedCategory = useSelector(getSelectedCategory);

    return <button className={selectedCategory === category ? "category selected" : "category"}>{category}</button>
}