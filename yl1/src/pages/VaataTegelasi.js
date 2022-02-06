import { Link } from 'react-router-dom';
import { useState } from 'react';

function VaataTegelasi () {

    const [valitudTegelased, uuendaValitudTegelased] = useState (saaTegelased());


    function saaTegelased() {
        return [{eesnimi:"Mickey", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:55, pilt: "https://pixy.org/src/62/621442.jpg" },
                {eesnimi:"Minnie", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:45, pilt: "https://pixy.org/src/67/678559.jpg"},
                {eesnimi:"Winnie", perekonnanimi:"Pooh", elukoht:"Hundred Acre Wood", vanus:35, pilt: "https://pixy.org/src/51/511569.png"},
                {eesnimi:"Roo", perekonnanimi:"Kangaroo", elukoht:"Hundred Acre Wood", vanus:65, pilt: "https://cdn.pixabay.com/photo/2016/06/07/08/39/kangaroo-1441197_960_720.jpg"},
                {eesnimi:"Scooby", perekonnanimi:"Doo", elukoht:"Crystal Cove", vanus:25, pilt: "https://pixy.org/src/50/505156.jpg"}];
    }

    function kustutaTegelane (kustutamiselTegelane) {
        console.log("Töötab");
        console.log(kustutamiselTegelane);
        const tegelased = valitudTegelased.slice();
        const indeks = tegelased.indexOf(kustutamiselTegelane);
        tegelased.splice(indeks,1);
        uuendaValitudTegelased (tegelased);
    }

    

    return (
    

            <div>
                {valitudTegelased.map(tegelane => 
                <div  key={tegelane.eesnimi} className="tegelane">
                    <div>{tegelane.eesnimi}</div> 
                    <div>{tegelane.perekonnanimi}</div> 
                    <div>{tegelane.vanus}</div> 
                    <img src={tegelane.pilt} alt="" /><br />
                    <button onClick={() => kustutaTegelane(tegelane)}>Kustuta</button>
                </div>)}
            </div> )
}

export default VaataTegelasi;