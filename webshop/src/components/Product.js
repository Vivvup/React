import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { cartSumService } from '../services/CartSumService';

function Product(props) {
    const {t} = useTranslation();
    const productName = props.product.name;
    const productImg = props.product.imgSrc;
    const productPrice = Number(props.product.price).toFixed(2);

    function onAddToCart(product) {
        let cartProducts; //let muutujale saab anda uuesti väärtuse
         if (sessionStorage.getItem("cart")) {
             cartProducts = JSON.parse(sessionStorage.getItem("cart"));
             const index = cartProducts.findIndex(element => element.cartProduct.name === product.name);
            if (index !== -1) {
                cartProducts[index].quantity++; //suurenda quantity't
            } else {
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
         let sumOfCart = 0;
         cartProducts.forEach(element => sumOfCart += element.cartProduct.price * element.quantity);
         cartSumService.sendCartSum();
         sessionStorage.setItem("cart",JSON.stringify(cartProducts));
         props.addedToCart();
     }

    return (<div>
            <Link to={"/toode/" + props.product.id}>
            <div>{productName}</div>
            <img src = {productImg} alt="" />
            <div>{productPrice} €</div>
            </Link>
             <button onClick= {() => onAddToCart(props.product)}> {t("add-to-cart-button")}</button>
    </div>)
}
export default Product;