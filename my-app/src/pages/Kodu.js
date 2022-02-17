import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

function Kodu() {
        const [tooted, uuendaTooted] = useState([]);

     useEffect(() => {
        fetch ("https://react-e9a71-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
        .then(response => {
            return response.json();
        }). then (data => {
            console.log(data)
            const newArray = [];
            for (const key in data) {
                newArray.push(data[key]);
            }
            console.log(newArray);
            uuendaTooted(newArray);
           }
        );

     },[])  
    
    // function saaTooted() {

    //     return [{nimetus: "Coca Cola", hind: 1.5, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
    //     {nimetus: "Fanta", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54491625.jpg "},
    //    {nimetus: "Sprite", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/5449000110671.jpg"},
    //     {nimetus: "Vitamin well", hind: 2, kategooria: "water", pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"},
    //     {nimetus: "Vichy", hind: 1.5, kategooria: "water", pilt: "https://saku.ee/media/18809/ee_vichy-vitamin-sport.png"},];
    //  }

      function lisaOstukorvi(lisatavToode) {
         if (sessionStorage.getItem("ostukorv")) {
             const ostukorviTooted = JSON.parse(sessionStorage.getItem("ostukorv"));
             const index = ostukorviTooted.findIndex(toode => toode.ostukorviToode.nimetus === toode.nimetus)
             if(index !== -1) {
                ostukorviTooted[index].kogus++;
             } else {
                ostukorviTooted.push({ostukorviToode: lisatavToode, kogus: 1});
            }
            sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviTooted));
       } else {
        const ostukorviTooted = [{ostukorviToode: lisatavToode, kogus: 1}];
        sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviTooted));
       } 
      }

    return (
        <div>
            {tooted.map(toode => 
            <div className="toode">
                {/*<Link to={`/toode/${toode.nimetus}`}></Link>*/}
                <Link to={"/toode/" + toode.nimetus.toLowerCase().replace(" ","-")}>
                <div>{toode.nimetus}</div> 
                <div>{toode.hind} eur</div> 
                <img src={toode.pilt} alt="" /><br />
                </Link>
                <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
            </div>)}
            {/*<div>
                <div>Coca Cola</div> 
                <div>1.5</div> 
                <div>coca</div> 
                <img src="https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg" alt="" />
            </div> */}
        </div> 
    );
}
    //default tähendab, et imporditakse alati terve component
    //import {Link} from 'react-router-dom'
    //see tähendab, et Link juures ei olnud default
    
    //import Kodu from './pages/Kodu.js'
export default Kodu;