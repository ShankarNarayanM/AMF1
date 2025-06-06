import Axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';
import Navbar from './Navbar';
import SidePanel from './SidePanel';

function Homepage()
{
    const [products, setProducts] = useState([]);
    const [childProducts, setChildProducts] = useState([]);

    function handleDataFromChild(data){
        setChildProducts(data)
    }

    useEffect(()=>{
        Axios.get("https://dummyjson.com/products")
        .then((obj)=>{
            const arr = obj.data.products
            setProducts(arr)
            setChildProducts(arr)
        })
        .catch((err)=>console.log(err))
    },[])
    return(
        <div class="container">
            <Navbar props={products} getState={handleDataFromChild}/>
            <div class="row">
                <SidePanel props={products} getState={handleDataFromChild}/>
                <div class="col-10">
                    <div class="row d-flex justify-content-around">
                        {childProducts.map((val)=>{
                            return <Card key={val.id} props={val}/>
                        })}
                    </div>            
                </div>
            </div>
        </div>
    );
}

export default Homepage;