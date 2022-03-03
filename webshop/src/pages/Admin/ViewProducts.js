import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import AdminProduct from "../../components/AdminProduct";

function ViewProduct(){
  const {t} = useTranslation();
  const [products,setProducts] = useState([]);
  const [originalProducts,setOriginalProducts] = useState([]);

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
          setOriginalProducts(newArray)
         }
      );

   },[])  

  //  function deleteProduct(delProduct) {
  //   let array = products.slice();
  //   const index = array.indexOf(delProduct);
  //   array.splice(index,1);
  //   setProducts(array);
  //   fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json",
  //   {
  //     method: "PUT",
  //     body: JSON.stringify(array)
  //   })
  // }

  function onProductDeleted(product){
    let array = products.slice();
    const index = array.indexOf(product);
    if (index !== -1){
      array.splice(index,1);
      setProducts(array);
      fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json",
      {
        method: "PUT",
        body: JSON.stringify(array)
      })
      toast.success(t("Edukalt kustutatud!"), {
        position: "bottom-right"
      });
      }else {
        toast.error (t("Viga toote kustutamisel!"), {
          position: "bottom-right"
        });
    }

  }

  function onSearch (event) {
    console.log(event.target.value);
    //originaal / mida välja näitan
    const updatedProducts = originalProducts.filter(element => 
      element.name.indexOf(event.target.value) > -1);
    setProducts(updatedProducts);
  }

  return (<div>
    <Link to="/admin">
      <button>Tagasi</button><br /><br />
    </Link>
  <div className='search'>
    <input  onKeyUp= {onSearch} type="text" />
    {products.map(element => <AdminProduct key={element.id}
    product={element} productDeleted={onProductDeleted}
/>)}
  <ToastContainer />
  </div>
</div>)

}
export default ViewProduct;