import { useEffect, useState} from 'react';

function SingleProducts(){
    const [products,setProducts] = useState([]);

    console.log(window.location.href.split("toode/"));
    console.log(window.location.href.split("toode/")[1]);

    const productId = window.location.href.split("toode/")[1];

    const product = products.find(element => element.id.toString() === productId);
    console.log(product);

    useEffect(() => {
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json")
        .then(response => {
            return response.json();
        }). then (data => {
            console.log(data)
            //forin
            const newArray = [];
            for (const key in data) {
                newArray.push(data[key]);
            }
            console.log(newArray);
            setProducts(newArray);
            console.log("uuendan");
           }
        );
  
     },[]) 

     
    return(
    <div>
        {product &&  
        <div>
            <div> Nimetus: {product.name}</div>
             <div> Hind: {product.price}</div>
            <img src={product.imgSrc} alt="" /> 
        </div>}   
        { !product && <div> Sellist toodet ei eksisteeri</div> }
    </div>)
}
export default SingleProducts;