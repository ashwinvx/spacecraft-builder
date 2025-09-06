import ItemCard from "./ItemCard";
import ItemAction from './ItemAction';
const InventoryDisplay = ({ items, deleteItem }) => {

    return (
        <>
            <h3>Inventory</h3>
            <div>
                { items.map(({ id, name, quantity, purpose }) =>
                    <div className="card" key={ id }>
                        <ItemCard id={ id } name={ name } quantity={ quantity } purpose={ purpose } />
                        <ItemAction deleteItem={ deleteItem } itemId={ id } />
                    </div>
                ) }
            </div>
        </>
    )
}

export default InventoryDisplay;
