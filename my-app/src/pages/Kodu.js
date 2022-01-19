
function Kodu() {
    function saaTooted() {
        return [{nimetus: "Coca Cola", hind: 1.5, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
        {nimetus: "Fanta", hind: 1, kategooria: "coca", pilt: ""},
        {nimetus: "Sprite", hind: 1, kategooria: "coca", pilt: ""},
        {nimetus: "Vitamin well", hind: 2, kategooria: "water", pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"},
        {nimetus: "Vichy", hind: 1.5, kategooria: "water", pilt: "https://saku.ee/media/18809/ee_vichy-vitamin-sport.png"},];
      }

      function lisaOstukorvi() {
        console.log("t66tab nupuvajutus");
      }
    return (
        <div>
            {saaTooted().map(toode => 
            <div className="toode">
                <div>{toode.nimetus}</div> 
                <div>{toode.hind}</div> 
                <div>{toode.kategooria}</div> 
                <img src={toode.pilt} alt="" /><br />
                <button onClick={lisaOstukorvi}>Lisa ostukorvi</button>
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
    //dafault t'hendab, et imporditakse alati terve component
export default Kodu;