import { useParams, Link } from 'react-router-dom';
import { useRef, useEffect, useState} from 'react';

function EditHome(){

    const nameRef = useRef();
    const priceRef = useRef();
    const imgSrcRef = useRef();

    const [products, setProducts] = useState([]);
    const {tooteNimi} = useParams();

    useEffect(() => {
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json")
        .then(response => response.json())
        .then (body => { 
            console.log(body)
            const newArray = [];
            for (const key in body) {
                newArray.push(body[key]);
            }
            console.log(newArray);
            setProducts(newArray);
           }
        );

     },[])  

     const product = products.find(element => 
        element.name.toLowerCase().replace(" ","-") === tooteNimi);
    console.log(product);
    const productId = products.indexOf(product);
    
    function changeProduct() {
  
        console.log (nameRef.current.value);
        console.log (priceRef.current.value);
        const product = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            imgSrc: imgSrcRef.current.value,
           
        }
        console.log (product);
        products[productId] = product;
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json",
            {
              method: "PUT",
              body: JSON.stringify(products)
            })
      }

    return (
    <div>
        <Link to="/admin/tooted">
          <button>Tagasi</button>
        </Link><br/>
     { product &&
      <div>
        <label>Toote nimetus</label><br/>
        <input  ref={nameRef} defaultValue= {product.name} type="text" /><br/>
        <label>Toote hind</label><br/>
        <input  ref={priceRef} defaultValue= {product.price} type="number" /><br/>
        <label>Toote pilt</label><br />
        <input ref={imgSrcRef} defaultValue={product.imgSrc} type="text" /><br />
        <button onClick={changeProduct}>Sisesta</button>
     </div>}
    </div>)
}
export default EditHome;