import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Products.css';

export const ProductCreate = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          price: parseFloat(price) || 0,
          quantity: parseInt(quantity, 10) || 0,
        }),
      });
      if (response.ok) {
        navigate('/');
      }
    } catch (err) {
      console.error('Failed to create product:', err);
    }
  };

  return (
    <div className="new_product body">
      <div className="new_product_title title">Create a new product</div>
      <form onSubmit={submit}>
        <div>
          <input
            className="input-1"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="input-1"
            type="number"
            step="0.01"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="input-1"
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
          />
        </div>
        <button className="button-4" type="submit">Create Product</button>
        <Link to="/" className="button-4" style={{ textDecoration: 'none' }}>Cancel</Link>
      </form>
    </div>
  );
};