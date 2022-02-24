import { Link } from 'react-router-dom';
import {  useRef } from 'react';

function AddProduct(){

    const nameRef = useRef();
    const priceRef = useRef();
    const imgSrcRef = useRef();

    function addNewProduct() {
        console.log (nameRef.current.value);
        console.log (priceRef.current.value);
        const product = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            imgSrc: imgSrcRef.current.value,
        }
        console.log (product);
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json", 
            {
                method: "POST", 
                body: JSON.stringify(product)

            }
        
        );
    }
    return (
    <div>
        <Link to="/admin">
          <button>Tagasi</button>
        </Link><br/>
       <label>Toote nimetus</label><br/>
       <input  ref={nameRef} type="text"/><br/>
       <label>Toote hind</label><br/>
       <input  ref={priceRef} type="number"/><br/>
       <label>Toote pilt</label><br />
        <input ref={imgSrcRef} type="text" /><br />
       <button onClick={addNewProduct}>Sisesta</button>
       
    </div>)
}
export default AddProduct;