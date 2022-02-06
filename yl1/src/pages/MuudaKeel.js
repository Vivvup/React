import {Link} from 'react-router-dom';
import {useState} from 'react';

function MuudaKeel () {
    const [keel, muudaKeel] = useState (localStorage.getItem ("veebilehe_keel"));

    function eestiKeel() {
        localStorage.setItem("veebilehe_keel", "eesti");
        muudaKeel("eesti");
    }

    function veneKeel() {
        localStorage.setItem("veebilehe_keel", "vene");
        muudaKeel("vene");
    }

    function ingliseKeel() {
        localStorage.setItem("veebilehe_keel", "inglise");
        muudaKeel("inglise");
    }
        
        

    return(
        <div>
        
            <div>
                <button onClick={eestiKeel} >eesti keel</button>
                <button onClick={veneKeel}>vene keel</button>
                <button onClick={ingliseKeel} >inglise keel</button><br/><br/>
            </div>
            <div>
                {keel === "eesti" && <div>eesti_keelne_sõna</div>}
                {keel === "vene" && <div>vene_keelne_sõna </div> }
                {keel === "inglise" && <div>inglise_keelne_sõna </div> }
            </div>
        </div> );
}

export default MuudaKeel;