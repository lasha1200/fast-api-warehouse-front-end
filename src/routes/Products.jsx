import {useEffect, useState} from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

const BASE_URL = "http://localhost:8000"

export const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw response
    })
    .then(data => {
      setProducts(data)
    })
    .catch(err => {
      console.error(err)
    })
  },[])

  const deleteProduct = (e, id) => {
    e.preventDefault()
    fetch(`${BASE_URL}/product/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      if(response.ok){
        setProducts(products.filter(product => product.id !== id))
      }
    })
    .catch(err => {
      console.error('Failed to delete product:', err)
    })
  }

    return (
        <div className = "products_div body">
            <div className="products_title title">Products</div>
            <div className="products_add_div">
              <Link to = {'/create'} className = "product_add button-4">Add</Link>
              <table className = "product_table">
                <thead className = "products_table_head">
                  <tr>
                    <th scope ="col">#</th>
                    <th scope ="col">Name</th>
                    <th scope ="col">Price</th>
                    <th scope ="col">Quantity</th>
                    <th scope ="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  products.map(product => {
                    return <tr className ="products_table_row" key = {product.id}>
                      <td className ="products_table_td">{product.id}</td>
                      <td className ="products_table_td">{product.name}</td>
                      <td className ="products_table_td">{product.price}</td>
                      <td className ="products_table_td">{product.quantity}</td>
                      <td className ="products_table_td">
                        <a href = "#" className = "product_delete_link" onClick = {(e) => deleteProduct(e, product.id)}>
                          Delete
                        </a>
                      </td>
                    </tr>
                  })
                }
                </tbody>
              </table>
            </div>
            <div className="products_order_div">
              <Link to = {'/'} className = "product_order button-4">Order</Link>
            </div>
        </div>
    );
}