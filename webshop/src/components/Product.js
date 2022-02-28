import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

function Product (props) {
    const {t} = useTranslation();

    function onAddToCart(product) {
        let cartProducts; //let muutujale saab anda uuesti väärtuse
         if (sessionStorage.getItem("cart")) {
             cartProducts = JSON.parse(sessionStorage.getItem("cart"));
             const index = cartProducts.findIndex(element => element.cartProduct.name === product.name);
            if (index !== -1) {
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
         props.addedToCart();
     }

    return (<div>
            <Link to={"/toode/" + props.product.name.toLowerCase().replace(" ","-")}>
            <div>{props.product.name}</div>
            <img src = {props.product.imgSrc} alt="" />
            <div>{props.product.price} €</div>
            </Link>
             <button onClick= {() => onAddToCart(props.products)}> {t("add-to-cart-button")}</button>
    </div>)
}
export default Product;