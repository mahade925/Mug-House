import React from 'react';
import './Products.css'

const Products = () => {
    return (
        <div className="products-container container mb-5">
            <h1 className="">Products</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div class="col">
                    <div class="card product-card">
                        <img src="https://images.unsplash.com/photo-1511517099458-7346484896f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHBvdHRlcnl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Card title</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button className="btn btn-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card product-card">
                        <img src="https://images.unsplash.com/photo-1603872864499-bd75c625bf0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBvdHRlcnl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Card title</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button className="btn btn-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card product-card">
                        <img src="https://images.unsplash.com/photo-1556760891-018194410847?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBvdHRlcnl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Card title</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card product-card">
                        <img src="https://images.unsplash.com/photo-1601430727739-4150d4568f20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fHBvdHRlcnl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Card title</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button className="btn btn-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card product-card">
                        <img src="https://images.unsplash.com/photo-1588410389114-369ac90c787f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Card title</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button className="btn btn-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card product-card">
                        <img src="https://images.unsplash.com/photo-1545051116-c1a333fd889f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxwb3R0ZXJ5fGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
                        <div class ="card-body">
                        <h5 class ="card-title">Card title</h5>
                        <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <button className="btn btn-dark">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;