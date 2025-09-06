import { useState } from "react";
import './ItemForm.css';
const ItemForm = ({ addItem }) => {
    const INITIAL_STATE = {
        name: '',
        quantity: '',
        purpose: '',
        terms: false
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        // Determine the correct value to use based on the input type
        const inputValue = type === 'checkbox' ? checked : value;
        setFormData(data => ({ ...data, [name]: inputValue }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ ...formData });
        setFormData(INITIAL_STATE);
    }
    return (
        <form className="full-width-form" onSubmit={ handleSubmit }>
            <h3>Add an item to the Inventory</h3>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={ formData.name }
                onChange={ handleChange }
                required
            /><br />
            <input
                id="quantity"
                name="quantity"
                type="text"
                placeholder="Quantity"
                value={ formData.quantity }
                onChange={ handleChange }
                required
            /><br />
            <textarea
                id="purpose"
                name="purpose"
                type="textarea"
                placeholder="Purpose"
                value={ formData.purpose }
                onChange={ handleChange }
                required
            ></textarea><br />
            <div className="terms">
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={ formData.terms }
                    onChange={ handleChange }
                    required
                />
                <label>Agree to Terms</label><br />
            </div>
            <button>Add</button>
        </form >
    )
}

export default ItemForm;