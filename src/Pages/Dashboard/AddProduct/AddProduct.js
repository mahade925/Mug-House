import React, { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const productInfo = { ...product };
        productInfo[field] = value;
        setProduct(productInfo);
    };

    const handleSubmit = e => {
        // send to the server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully product added!')
                }
            });
        e.preventDefault();
    }
    return (
        <div className="container w-50">
            <h1>Add Product</h1>
            <div className="container">
                <div class="form-floating mb-3 mt-5">
                    <input type="text" class="form-control" name="img" onBlur={handleOnChange} id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Image link</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="name" onBlur={handleOnChange} id="floatingPassword" placeholder="Password" /> 
                    <label for="floatingPassword">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="desc" onBlur={handleOnChange} id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Description</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="price" onBlur={handleOnChange} id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Price</label>
                </div>
                <button className="btn btn-info btn-lg w-100" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AddProduct;