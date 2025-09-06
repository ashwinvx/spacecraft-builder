import './ItemAction.css'
const ItemAction = ({ itemId, deleteItem }) => {
    const handleDelete = () => {
        deleteItem(itemId);
    }
    return (
        <div className='ItemAction'>
            <button onClick={ handleDelete }>Delete</button>
        </div>
    )
}

export default ItemAction;