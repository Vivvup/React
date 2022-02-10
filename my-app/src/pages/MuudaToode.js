
import { useParams, Link } from 'react-router-dom';
import { useRef, useEffect, useState} from 'react';

  

function MuudaToode() {

    const nimetusRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivneRef = useRef ();

    const [tooted,uuendaTooteid] = useState([]);

  // const tooteNimetus2 = windows.location.href.split("muuda/")[1];
  //path "asda/:tooteNimi"
  //vitamin-well
   const {tooteNimi} = useParams();
   //console.log(tooteNimetus2);
   //console.log(tooteNimi);
 useEffect(() => {
        fetch ("https://react-e9a71-default-rtdb.europe-west1.firebasedatabase.app/tooted.json")
        .then(response => {
            return response.json();
        }). then (data => {
            console.log(data)
            //forin
            const newArray = [];
            for (const key in data) {
                newArray.push(data[key]);
            }
            console.log(newArray);
            uuendaTooteid(newArray);
            console.log("uuendan");
           }
        );
  
     },[])   //et ei läheks lõputusse loopi

 const toode = tooted.find(element => 
    element.nimetus.toLowerCase().replace(" ","-") === tooteNimi);
console.log(toode);
const toodeId = tooted.indexOf(toode);


// function saaTooted() {
//     return [{nimetus: "Coca Cola", hind: 1.5, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
//     {nimetus: "Fanta", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54491625.jpg "},
//     {nimetus: "Sprite", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/5449000110671.jpg"},
//     {nimetus: "Vitamin well", hind: 2, kategooria: "water", pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"},
//     {nimetus: "Vichy", hind: 1.5, kategooria: "water", pilt: "https://saku.ee/media/18809/ee_vichy-vitamin-sport.png"},];
//   }

  
  function muudaToode() {
  
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
    tooted[toodeId] = toode;
    fetch ("https://react-e9a71-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        {
          method: "PUT",
          body: JSON.stringify(tooted)
        })
  }

  return (
    <div>
        <Link to="/admin/tooted">
          <button>Tagasi</button>
        </Link><br/>
     { toode &&
      <div>
        <label>Toote nimetus</label><br/>
        <input  ref={nimetusRef} defaultValue= {toode.nimetus} type="text" /><br/>
        <label>Toote hind</label><br/>
        <input  ref={hindRef} defaultValue= {toode.hind} type="number" /><br/>
        <label>Toote pilt</label><br />
        <input ref={piltRef} defaultValue={toode.pilt} type="text" /><br />
        <label htmlFor="aktiivne">Toote aktiivne</label><br/>
        <input ref= {aktiivneRef} defaultChecked= {toode.aktiivne} id= "aktiivne" type= "checkbox" /><br/>
        <button onClick={muudaToode}>Sisesta</button>
     </div>}
    </div>)

}

export default MuudaToode;