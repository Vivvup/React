import { Link } from 'react-router-dom';
import { useRef } from 'react';

function LisaTegelane() {

    const eesnimiRef = useRef();
    const perekonnanimiRef = useRef();
    const vanusRef = useRef();
    const piltRef = useRef();
  

    function sisestaUusTegelane() {
        console.log ("uus tegelane");
        console.log (eesnimiRef.current);
        console.log (eesnimiRef.current.value);
        console.log (perekonnanimiRef.current.value);
        console.log (vanusRef.current.value);
       
        const tegelane = {
            eesnimi: eesnimiRef.current.value,
            perekonnanimi: perekonnanimiRef.current.value,
            vanus: vanusRef.current.value,
            pilt: piltRef.current.value
        }
        console.log (tegelane);
        fetch ("https://ylesanded-e629f-default-rtdb.europe-west1.firebasedatabase.app/tegelased.json", 
            {
                method: "POST", 
                body: JSON.stringify(tegelane)

            }
        
        );
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
       <label>Tegelase pilt</label><br/>
       <input  ref={piltRef} type="text"/><br/><br/>
       <button onClick={sisestaUusTegelane}>Sisesta</button>
       
    </div>)
}

export default LisaTegelane;
