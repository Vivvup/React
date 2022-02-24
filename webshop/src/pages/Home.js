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
                const packageMachineIndex = cartProducts.findIndex(element => element.cartProduct.id === "11110000");
                console.log(packageMachineIndex);
                if(packageMachineIndex === -1){
                    cartProducts.push({cartProduct: product, quantity: 1});
                } else {
                    cartProducts.splice(cartProducts.length-1,0,{cartProduct: product, quantity: 1});
                }
                
            }
            sessionStorage.setItem("cart", JSON.stringify(cartProducts));
         } else {
            cartProducts = [{cartProduct: product, quantity: 1}];
           
         }
         sessionStorage.setItem("cart",JSON.stringify(cartProducts));
     }

     function sortAZ(){
         products.sort((a, b) => a.name.localeCompare(b.name));
         setProducts(products.slice());
     }

     function sortZA(){
        products.sort((a, b) => b.name.localeCompare(a.name));
        setProducts(products.slice());
    }

    function sortPriceAsc(){
        products.sort((a, b) => a.price - b.price);
        setProducts(products.slice());
    }
    function sortPriceDesc(){
        products.sort((a, b) => b.price - a.price);
        setProducts(products.slice());
    }
    
    return (
    <div>
        <button onClick= {sortAZ}>Sorteeri A-Z</button>
        <button onClick= {sortZA}>Sorteeri Z-A</button>
        <button onClick= {sortPriceAsc}>Hinna järgi kasvavalt</button>
        <button onClick= {sortPriceDesc}>Hinna järgi kahanevalt</button>
    <div>{products.map(element=> <div> 
        <div>{element.name}</div>
        <img src = {element.imgSrc} alt="" />
        <div>{element.price} €</div>
        <button onClick= {() => onAddCart(element)}> {t("add-to-cart-button")}</button>
         </div>)}
      </div>
    </div>)
}

// export, et saaks importida
// default näitamaks, et terve leht tuleb kasutusele
export default Home;