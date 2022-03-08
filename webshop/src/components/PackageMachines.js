
import {useEffect, useState} from 'react';
function PackageMachines (props) {
    const [packageMachines, setPackageMachines] = useState ([]);
    const [selectedMachine, setSelectedMachines] = useState (sessionStorage.getItem("parcelmachine"));

    useEffect(()=>{
        fetch ("https://www.omniva.ee/locations.json")
        .then(res => res.json()) // koos statuscode-ga, headeritega, url-ga..... {console.log(res); res.json()}
        .then (body => setPackageMachines(body));  // sisu kätte

    },[]);

    function getSelectedMachine() {
        if (sessionStorage.getItem("parcelmachine")) {
          return sessionStorage.getItem("parcelmachine");
        } else {
          return null;
        }
      }

    function chooseMachine (event) {
        //console.log(selectedMachine);
        //console.log(packageMachine);
        const selectedPackageMachine = event.target.value;
        sessionStorage.setItem("parcelmachine", selectedPackageMachine)
        setSelectedMachines(event.target.value);
       // console.log(event.target.value);
       const products = props.cartContent;
       const packageMachineInCart = {cartProduct: {id: "11110000", name: "Pakiautomaadi tasu", price: 3.5}, quantity: 1}
       products.push(packageMachineInCart);
       sessionStorage.setItem("cart", JSON.stringify(products));
       props.sendProducts(products.slice()); 

    }

    function deleteMachine() {
        sessionStorage.removeItem("parcelmachine");
        setSelectedMachines (null);
        const products = props.cartContent;
        products.splice(products.length-1); //kustuta alati viimane
        sessionStorage.setItem("cart", JSON.stringify(products));
        props.sendProducts(products.slice());

      }
    
    return (
        <div>
        { !selectedMachine && <select onChange={chooseMachine}>{packageMachines
            .filter(element => element.A0_NAME == "EE")
            .map(element => <option key={element.ZIP}>{element.NAME}</option> )}</select>
        }
    { selectedMachine && <div>{selectedMachine} <button onClick={deleteMachine}>X</button></div> }
    </div>);
}
export default PackageMachines;