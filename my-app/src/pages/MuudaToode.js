
import { useParams, Link } from 'react-router-dom';
import { useRef} from 'react';

  

function MuudaToode() {
    const nimetusRef = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef ();  
  // const tooteNimetus2 = windows.location.href.split("muuda/")[1];
  //path "asda/:tooteNimi"
  //vitamin-well
   const {tooteNimi} = useParams();
   //console.log(tooteNimetus2);
   //console.log(tooteNimi);


 const toode = saaTooted().find(element => 
    element.nimetus.toLowerCase().replace(" ","-") === tooteNimi);
console.log(toode);



function saaTooted() {
    return [{nimetus: "Coca Cola", hind: 1.5, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
    {nimetus: "Fanta", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54491625.jpg "},
    {nimetus: "Sprite", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/5449000110671.jpg"},
    {nimetus: "Vitamin well", hind: 2, kategooria: "water", pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"},
    {nimetus: "Vichy", hind: 1.5, kategooria: "water", pilt: "https://saku.ee/media/18809/ee_vichy-vitamin-sport.png"},];
  }

  
  function muudaToode() {
  
    console.log (nimetusRef.current.value);
    console.log (hindRef.current.value);
    console.log (aktiivneRef.current.checked);
    const toode = {
        nimetus: nimetusRef.current.value,
        hind: hindRef.current.value,
        aktiivne: aktiivneRef.current.checked
    }
    console.log (toode);
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
        <label htmlFor="aktiivne">Toote aktiivne</label><br/>
        <input ref= {aktiivneRef} defaultChecked= {toode.aktiivne} id= "aktiivne" type= "checkbox" /><br/>
        <button onClick={muudaToode}>Sisesta</button>
     </div>}
    </div>)

}

export default MuudaToode;