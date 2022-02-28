import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ViewProduct(){

    const [products,setProducts] = useState([]);

    useEffect(() => {
      fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json")
      .then(response => response.json())
      .then (data => {
          console.log(data)
          const newArray = [];
          for (const key in data) {
              newArray.push(data[key]);
          }
          console.log(newArray);
          setProducts(newArray);
         }
      );

   },[])  

   function deleteProduct(delProduct) {
    let array = products.slice();
    const index = array.indexOf(delProduct);
    array.splice(index,1);
    setProducts(array);
    fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json",
    {
      method: "PUT",
      body: JSON.stringify(array)
    })
  }

    return (
    <div>
        <Link to="/admin">
          <button >Tagasi</button>
        </Link>
        <div>
            {products.map(product => 
            <div className="product">
                <div>{product.name}</div> 
                <div>{product.price} eur</div> 
                <img src={product.imgSrc} alt="" /><br />
                <button onClick={() => deleteProduct(product)}>Kustuta</button>
                <Link to={"/admin/muuda/" + product.name.toLowerCase().replace(" ","-") }>
                  <button > Muuda </button><br/><br/>
                 </Link>
            </div>)}
        </div> 
    </div>)
}
export default ViewProduct;