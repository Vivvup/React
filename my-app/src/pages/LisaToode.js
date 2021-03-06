import { Link } from 'react-router-dom';
import {  useRef } from 'react';

function LisaToode () {

    const nimetusRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivneRef = useRef ();

    function sisestaUusToode() {
        console.log ("uus toode");
        console.log (nimetusRef.current);
        console.log (nimetusRef.current.value);
        console.log (hindRef.current.value);
        console.log (aktiivneRef.current.checked);
        const toode = {
            nimetus: nimetusRef.current.value,
            hind: hindRef.current.value,
            pilt: piltRef.current.value,
            aktiivne: aktiivneRef.current.checked
        }
        console.log (toode);
        fetch ("https://react-e9a71-default-rtdb.europe-west1.firebasedatabase.app/tooted.json", 
            {
                method: "POST", 
                body: JSON.stringify(toode)

            }
        
        );
    }
    return (
    <div>
        <Link to="/admin">
          <button>Tagasi</button>
        </Link><br/>
       <label>Toote nimetus</label><br/>
       <input  ref={nimetusRef} type="text"/><br/>
       <label>Toote hind</label><br/>
       <input  ref={hindRef} type="number"/><br/>
       <label>Toote pilt</label><br />
        <input ref={piltRef} type="text" /><br />
       <label htmlFor="aktiivne">Toote aktiivne</label><br/>
       <input ref= {aktiivneRef} id= "aktiivne" type= "checkbox" /><br/>
       <button onClick={sisestaUusToode}>Sisesta</button>
       
    </div>)
}

export default LisaToode;