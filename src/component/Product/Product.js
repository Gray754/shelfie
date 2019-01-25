import React from 'react';

const Product = (props) =>{
    // console.log(props.inventory.image)
    return(
        <div>
            <h1>Product</h1>
            <p>Name: {props.name}</p>
            <p>Price: {props.price}</p>
            <p>Image: <img src={props.image} width='50px' alt=''/></p>
            <button onClick={props.deleteProduct(props.id)}>Delete</button>
        </div>
    )
}

export default Product;