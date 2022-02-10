import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function VaataTooteid () {
    const [tooted,uuendaTooteid] = useState([]);

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

    // function saaTooted() {
    //     return [{nimetus: "Coca Cola", hind: 1.5, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
    //     {nimetus: "Fanta", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54491625.jpg "},
    //     {nimetus: "Sprite", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/5449000110671.jpg"},
    //     {nimetus: "Vitamin well", hind: 2, kategooria: "water", pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"},
    //     {nimetus: "Vichy", hind: 1.5, kategooria: "water", pilt: "https://saku.ee/media/18809/ee_vichy-vitamin-sport.png"},];
    //   }

      function kustutaToode(kustutamiselToode) {
        let toodeteMassiiv = tooted.slice();
        const index = toodeteMassiiv.indexOf(kustutamiselToode);
        toodeteMassiiv.splice(index,1);
        uuendaTooteid(toodeteMassiiv);
        fetch ("https://react-e9a71-default-rtdb.europe-west1.firebasedatabase.app/tooted.json",
        {
          method: "PUT",
          body: JSON.stringify(toodeteMassiiv)
        })
      }

    return (
    <div>
        <Link to="/admin">
          <button >Tagasi</button>
        </Link>

        <div>
            {tooted.map(toode => 
            <div  key={toode.nimetus} className="toode">
                <div>{toode.nimetus}</div> 
                <div>{toode.hind} eur</div> 
                <div>{toode.kategooria}</div> 
                <img src={toode.pilt} alt="" /><br />
                <button onClick={() => kustutaToode(toode)}>Kustuta</button>
                <Link to={"/admin/muuda/" + toode.nimetus.toLowerCase().replace(" ", "-") }>
                  <button > Muuda </button><br/><br/>
                 </Link>
            </div>)}
        </div> 
    </div>)
}

export default VaataTooteid;