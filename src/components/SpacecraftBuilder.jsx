import { useState } from "react";
import InventoryDisplay from "./InventoryDisplay";
import ItemForm from "./ItemForm";
import { v4 as uuidv4 } from "uuid";

const SpacecraftBuilder = () => {
    const INITIAL_STATE = [
        { id: uuidv4(), name: 'Oxygen Tank', quantity: 2, purpose: 'Equipment' },
        { id: uuidv4(), name: 'First Aid Kit', quantity: 4, purpose: 'Medical' }
    ];
    const [items, setItems] = useState(INITIAL_STATE);
    const addItem = (newItem) => {
        console.log('newItem-->', newItem);
        setItems(items => [...items, { ...newItem, id: uuidv4() }])
        console.log('items-->', items);
    }
    const deleteItem = (itemId) => {
        setItems(items => items.filter(item => item.id != itemId));
    }
    return (
        <>
            <h1>Spacecraft Builder</h1>
            <ItemForm addItem={ addItem } />
            <InventoryDisplay items={ items } deleteItem={ deleteItem } />
        </>
    )
}

export default SpacecraftBuilder;