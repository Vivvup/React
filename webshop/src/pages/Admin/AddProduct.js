import { Link, useNavigate} from 'react-router-dom';
import {  useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function AddProduct(){
   
    const idRef = useRef();
    const nameRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const imgSrcRef = useRef();
    const [products, setProducts] = useState([]);
    const[buttonDisabled, setButtonDisabled] = useState(true);
    const navigate = useNavigate();
    console.log(products);

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
            console.log(products);
           }
        );

     },[]) 

    function addNewProduct(event) {
        event.preventDefault(); //vormide puhul vajalik, teeb refeshi vormidele
        if (!buttonDisabled && 
          idRef.current.value !== "" &&
          nameRef.current.value !== "") {
    
        const product = {
            id: idRef.current.value,
            name: nameRef.current.value,
            category: categoryRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            imgSrc: imgSrcRef.current.value,
            isActive: true
        }
        console.log (product);
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json", 
            {
                method: "POST", 
                body: JSON.stringify(product)

            }
        );
        idRef.current.value = "";
        nameRef.current.value = "";
        toast.success("Edukalt lisatud ostukorvi!", {
            position: "bottom-right",
            theme: "dark"
        });
        navigate("/admin/tooted");
       }
    }
    function checkIdUniqueness () {
        console.log(idRef.current.value);
        if(idRef.current.value.length === 8){
             const index = products.findIndex(element => element.id === idRef.current.value);
             if(index === -1){
                console.log("Unikaalne!");
                setButtonDisabled(false);
             } else {
                console.log("Kellegil juba olemas!");
                setButtonDisabled(true);
        }
     } else {
        setButtonDisabled(true);
        }
    }

    return (
    <div>
        <Link to="/admin">
          <button>Tagasi</button>
        </Link><br/>
        <form onSubmit={addNewProduct}> 
        <label>Toote id</label><br/>
       <input onKeyUp ={checkIdUniqueness} min={10000000} max={99999999} ref={idRef} type="number" required /><br />
       <label>Toote nimetus</label><br/>
       <input  ref={nameRef} type="text" required/><br/>
       <label>Toote kirjeldus</label> <br />
        <input ref={descriptionRef} type="text"required /><br />
       <label>Toote hind</label><br/>
       <input  ref={priceRef} type="number" required/><br/>
       <label>Toote kategooria</label><br/>
       <input  ref={categoryRef} type="text" required/><br/>
       <label>Toote pilt</label><br />
        <input ref={imgSrcRef} type="text" required/><br />
       <button disabled = {buttonDisabled} >Sisesta</button>
       </form>
       <ToastContainer />
    </div>)
}
export default AddProduct;