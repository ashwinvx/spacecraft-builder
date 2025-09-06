const ItemCard = ({ name, quantity, purpose }) => {
    return (
        <div >
            <h2>{ name }</h2>
            <h5>Quantity: { quantity }</h5>
            <h5>Purpose: { purpose }</h5>
        </div>
    )
}

export default ItemCard;