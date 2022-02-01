import { Link } from 'react-router-dom';
import { useRef } from 'react';

function LisaTegelane() {

    const eesnimiRef = useRef();
    const perekonnanimiRef = useRef();
    const vanusRef = useRef();
  

    function sisestaUusTegelane() {
        console.log ("uus tegelane");
        console.log (eesnimiRef.current);
        console.log (eesnimiRef.current.value);
        console.log (perekonnanimiRef.current.value);
        console.log (vanusRef.current.value);
       
        const tegelane = {
            eesnimi: eesnimiRef.current.value,
            perekonnanimi: perekonnanimiRef.current.value,
            vanus: vanusRef.current.value
        }
        console.log (tegelane);
    }
    return (
    <div>
        <Link to="/tegelased">
          <button>Tagasi</button>
        </Link><br/>
       <label>Tegelase eesnimi</label><br/>
       <input  ref={eesnimiRef} type="text"/><br/>
       <label>Tegelase perekonnanimi</label><br/>
       <input  ref={perekonnanimiRef} type="text"/><br/>
       <label>Tegelase vanus</label><br/>
       <input  ref={vanusRef} type="number"/><br/>
       <button onClick={sisestaUusTegelane}>Sisesta</button>
       
    </div>)
}

export default LisaTegelane;
