import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './products.css'
import {useParams} from "react-router-dom"

function Products() {
    const [products,setProducts] = useState([]);
    const {projectId}=useParams()

useEffect(() =>{
    fetchProducts();
}, []);

const fetchProducts =()=> {
    // axios.get('https://shoppingapiacme.herokuapp.com/shopping')
    axios.get(`192.216.82.145:8080/api/documents`)
    .then((res)=>{
        console.log(res);
        setProducts(res.data);
    }).catch((err)=>{
        console.log(err);
    });
}
  return (
    <div>
        <h1>products</h1>
        <div className='product_items'>
            {products.map((product)=>(
                <div className='card' key={product.id}>
                    <img src={product.image} alt=''/>
                    <h3>{product.brand}</h3>
                    <p>{product.item}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products