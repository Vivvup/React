
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
import Product from '../components/Product';
import SortButtons from '../components/SortButtons';
import Carousel from '../components/Carousel';


function Home() {
    const {t} = useTranslation();
    const [products, setProducts] = useState([]);

    // kui läheb käima useState parempoolne funktsioon (ükskõik millisel useState-l),
  // siis tehakse terve Component uuesti, kui ta on Componendi renderdamisega lõpule jõudnud

    useEffect(() => {
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json")
        .then(response => response.json())//terve response koos kõikide andmetega
        .then (body => { //teine then() on body kättesaamiseks
            const newArray = [];
            for (const key in body) {
                newArray.push(body[key]);
            }
            setProducts(newArray);
           }
        );
     },[])   //et ei läheks lõputusse loopi

    //          {name: "sadas", price: 4,...}
    // hinna teada saamiseks element.price
    // []  --> [{name: "sadas", price: 4,...}] --> [{name: "sadas", price: 4,...},{name: "sadas", price: 4,...}]
    // hinna teada saamiseks element.cartProduct.price
    // koguse poole pöördumiseks element.quantity
    // []  --> [{cartProduct:{name: "sadas", price: 4,...},quantity:1}]

    return (
    <div>
        <Carousel className = "slick-slider"/>
        <SortButtons prods={products} prodsSorted={setProducts}/>
    <div>{products.map(element=> <Product  key={element.id}
        product={element} addedToCart ={() => toast.success(t("Edukalt lisatud ostukorvi!"), {
            position: "bottom-right"
        })}
    />)}
      </div>
      <ToastContainer />
    </div>)
}

// export, et saaks importida
// default näitamaks, et terve leht tuleb kasutusele
export default Home;