import { useParams, Link } from 'react-router-dom';
import { useRef, useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

function EditProduct(){

  const idRef = useRef();
  const nameRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const imgSrcRef = useRef();
  const isActiveRef =useRef();

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();
    const[buttonDisabled, setButtonDisabled] = useState(false);
    const[index, setIndex] = useState();
    const {productId} = useParams();

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
            const productFound = newArray.find(element => element.id.toString() === productId)
            setProduct(productFound);
            console.log(productFound);
            const indexFound = newArray.indexOf(productFound);
            setIndex(indexFound);
           }
        );

     },[productId])  

    //  const product = products.find(element => 
    //     element.name === tooteNimi);
    // console.log(product);
    // const productId = products.indexOf(product);
    
    function editProduct(event) {
      event.preventDefault();
   
        const newProduct = {
          id: idRef.current.value,
          name: nameRef.current.value,
          category: categoryRef.current.value,
          description: descriptionRef.current.value,
          price: priceRef.current.value,
          imgSrc: imgSrcRef.current.value,
          isActive: isActiveRef.current.checked
      }
        products[index] = newProduct;
        fetch ("https://webshop-vp-default-rtdb.europe-west1.firebasedatabase.app/products.json",
            {
              method: "PUT",
              body: JSON.stringify(products)
            }
            );
            idRef.current.value ="";
            nameRef.current.value = "";
            toast.success("Edukalt toode muudetud!", {
              position: "bottom-right",
              theme:"dark"
            });
      }

      function checkIdUniqueness () {
        console.log(idRef.current.value);
        if(idRef.current.value.length === 8){
             const index = products.findIndex(element => element.id.toString() === idRef.current.value);
             if(index === -1 || idRef.current.value === productId){
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
    <Link to="/admin/tooted">
      <button>Tagasi</button>
    </Link><br/>
    {product && <form onSubmit={editProduct}> 
    <label>Toote id</label><br/>
   <input onKeyUp ={checkIdUniqueness} min={10000000} max={99999999} ref={idRef} defaultValue={product.id} type="number" required /><br />
   <label>Toote nimetus</label><br/>
   <input  ref={nameRef} defaultValue={product.name} type="text" required/><br/>
   <label>Toote kirjeldus</label> <br />
    <input ref={descriptionRef} defaultValue={product.description} type="text"required /><br />
   <label>Toote hind</label><br/>
   <input  ref={priceRef} defaultValue={product.price} type="number" required/><br/>
   <label>Toote kategooria</label><br/>
   <input  ref={categoryRef} defaultValue={product.category} type="text" required/><br/>
   <label>Toote pilt</label><br />
    <input ref={imgSrcRef} defaultValue={product.imgSrc} type="text" required/><br />
   <button disabled = {buttonDisabled} >Sisesta</button>
   </form>}
   <ToastContainer />
</div>)
}
export default EditProduct;