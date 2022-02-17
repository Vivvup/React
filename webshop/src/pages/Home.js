import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

function Home(){
    const [products, setProducts] = useState([]);
    const {t} = useTranslation();

    // kui läheb käima useState parempoolne funktsioon (ükskõik millisel useState-l),
  // siis tehakse terve Component uuesti, kui ta on Componendi renderdamisega lõpule jõudnud

    useEffect(() => {
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json")
        .then(response => response.json())//terve response koos kõikide andmetega
        .then (body => { //teine then() on body kättesaamiseks
            console.log(body)
            const newArray = [];
            for (const key in body) {
                newArray.push(body[key]);
            }
            console.log(newArray);
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

     function onAddCart(product) {
        let cartProducts; //let muutujale saab anda uuesti väärtuse
         if (sessionStorage.getItem("cart")) {
             cartProducts = JSON.parse(sessionStorage.getItem("cart"));
             const index = cartProducts.findIndex(element => element.cartProduct.name === product.name)
            if(index !== -1) {
                cartProducts[index].quantity++; //suurenda quantity't
            } else {
                    //push
                cartProducts.push({cartProduct: product, quantity: 1});
            }
            sessionStorage.setItem("cart", JSON.stringify(cartProducts));
         } else {
            cartProducts = [{cartProduct: product, quantity: 1}];
           
         }
         sessionStorage.setItem("cart",JSON.stringify(cartProducts));
     }
    
    return (<div>{products.map(element=> <div> 

        <div>{element.name}</div>
        <img src = {element.imgSrc} alt="" />
        <div>{element.price} €</div>
        <button onClick= {() => onAddCart(element)}> {t("add-to-cart-button")}</button>

    </div>)}</div>)
}

// export, et saaks importida
// default näitamaks, et terve leht tuleb kasutusele
export default Home;