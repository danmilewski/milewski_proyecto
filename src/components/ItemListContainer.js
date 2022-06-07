import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
            <div>
                <h2>{props.saludo}</h2>
                <ItemCount stock={5} initial={1} />
            </div>
    )
}

export default ItemListContainer