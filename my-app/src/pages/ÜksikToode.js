function ÜksikToode () {

    console.log(window.location.href.split("toode/"));
    console.log(window.location.href.split("toode/")[1]);
    const  tooteNimetus = window.location.href.split("toode/")[1];

    const toode = saaTooted().find(element => 
        element.nimetus.toLowerCase().replace(" ","-") === tooteNimetus);
    console.log(toode);

    //.splice() MASSIIV/LIST/ARRAY kustutamiseks (+ lisamiseks mingile kindlale indeksile)
    //.slice() MASSIIV/LIST/ARRAY massiivsist koopia tegemiseks (mälukohtade kaotamiseks)
    //.split() sõnalise muutuja tükeldamiseks, mis teeb sellest massiivi
   
   
    function saaTooted() {
        return [{nimetus: "Coca Cola", hind: 1.5, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54490703.jpg"},
        {nimetus: "Fanta", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/54491625.jpg "},
        {nimetus: "Sprite", hind: 1, kategooria: "coca", pilt: "https://www.selver.ee/img/800/800/resize/5/4/5449000110671.jpg"},
        {nimetus: "Vitamin well", hind: 2, kategooria: "water", pilt: "https://www.vitaminwell.com/wp-content/uploads/2019/01/EXP_VW_CELEBRATE_Ltd_1.14-219x884.png"},
        {nimetus: "Vichy", hind: 1.5, kategooria: "water", pilt: "https://saku.ee/media/18809/ee_vichy-vitamin-sport.png"},];
      }

    return (
        <div>
        {toode &&  // toode !== undefined
        <div>
            <div> Nimetus: {toode.nimetus}</div>
             <div> Hind: {toode.hind}</div>
            <div> Kategooria: {toode.kategooria}</div>
            <img src={toode.pilt} alt="" /> 
        </div>}   
        { !toode && <div> Sellist toodet ei eksisteeri</div> }
     </div>
    
    );
}

export default ÜksikToode;