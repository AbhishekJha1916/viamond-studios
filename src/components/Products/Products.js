import React from 'react';
import './Products.css';

import post1 from '../Images/post-1.jpg';
import post2 from '../Images/post-2.jpg';
import post3 from '../Images/post-3.jpg';

const Products = () => {
  return (
    <>
        <section className="sub-header">
            <h1>Products</h1>
        </section>
        
        <section className="products">

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis quis laborum consequatur<br/> eligendi, hic
            reiciendis dolorem odit beatae? Assumenda quos.</p>
            <div className="row">
                <div className="product-col">
                    <img src={post1} alt='post1'/>
                    <div className="layer">
                        <h3>PRODUCT 1</h3>
                    </div>
                </div>
                <div className="product-col">
                    <img src={post2} alt='post2'/>
                    <div className="layer">
                        <h3>PRODUCT 2</h3>
                    </div>
                </div>
                <div className="product-col">
                    <img src={post3} alt='post3'/>
                    <div className="layer">
                        <h3>PRODUCT 3</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="product-col">
                    <img src={post1} alt='post1'/>
                    <div className="layer">
                        <h3>PRODUCT 4</h3>
                    </div>
                </div>
                <div className="product-col">
                    <img src={post2} alt='post2'/>
                    <div className="layer">
                        <h3>PRODUCT 5</h3>
                    </div>
                </div>
                <div className="product-col">
                    <img src={post3} alt='post3'/>
                    <div className="layer">
                        <h3>PRODUCT 6</h3>
                    </div>
                </div>
            </div>
        </section>

        <div className="comment-box">
            <h3>Leave a Comment</h3>

            <form className="comment-form">
                <input type="text" placeholder="Enter Name"/>
                <input type="text" placeholder="Enter Email"/>
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <button type="submit" className="btn">POST COMMENT</button>
            </form>
        </div>
    </>
  );
}

export default Products;


