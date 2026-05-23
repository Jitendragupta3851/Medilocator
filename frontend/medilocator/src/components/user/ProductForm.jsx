import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const URL="http://localhost:3000/user/addProduct"
   // const email=localStorage.getItem("emailKey")
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user._id;

  const [productData, setProductData] = useState({
    productName: '',
    productCategory: '',
    productDescription: '',
    productPrice: '',
    productPic: null,
    productStatus: 'available',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'productPic') {
      setProductData({ ...productData, productPic: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in productData) 
        {
        formData.append(key, productData[key]);//to set all value from object
        
      }
      formData.append('user',userId)
    
      for (let [key, value] of formData.entries()) 
        {
        console.log(`${key}:`, value);
        }

        try{
            const serverResponse=await axios.post(URL,formData)
            console.log(serverResponse);
            
          setMessage(serverResponse.data.message)
        }
        catch(err)
        {
        console.log(err);
        }
        
   
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Add New Product</h3>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="productName"
            className="form-control"
            value={productData.productName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
    name="productCategory"
    className="form-control"
    value={productData.productCategory}
    onChange={handleChange}
    required
  >
    <option value="">-- Select Category --</option>
    <option value="electronics">Electronics</option>
    <option value="furniture">Furniture</option>
    <option value="homeappliances">Home Appliances</option>
  </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="productDescription"
            className="form-control"
            value={productData.productDescription}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input
            type="text"
            name="productPrice"
            className="form-control"
            value={productData.productPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input
            type="file"
            name="productPic"
            className="form-control"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

       

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
