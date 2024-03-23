export default function DishCard({id, name, price, image}) {
    return <div className="card" key={id}>
        <h3>{name}</h3>
        <img src={`${image}.jpg`} alt=""/>
        <b>$ {price}</b>
        <p className="amount">
            <button>+</button>
            1
            <button>-</button>
        </p>
        <button>Add to cart</button>
    </div>
}