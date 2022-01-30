
import { useState } from 'react';

function Tegelased() {
    const [valitudTegelased, uuendaValitudTegelased] = useState (saaTegelased());

    function saaTegelased() {
        return [{eesnimi:"Mickey", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:55 },
                {eesnimi:"Minnie", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:45 },
                {eesnimi:"Winnie", perekonnanimi:"Pooh", elukoht:"Hundred Acre Wood", vanus:35},
                {eesnimi:"Roo", perekonnanimi:"Kangaroo", elukoht:"Hundred Acre Wood", vanus:65},
                {eesnimi:"Scooby", perekonnanimi:"Doo", elukoht:"Crystal Cove", vanus:25}];
    }

    function valiTegelane(tegelane) {
        console.log("Valitud!");
        const tegelased = valitudTegelased.slice();
        console.log(tegelased);
        tegelased.push(tegelane);
        console.log(tegelased);
        uuendaValitudTegelased (tegelased);
    }

    function kustutaTegelane (tegelane) {
        console.log(tegelane + " on kustutatud!");
        console.log(tegelane);
        const tegelased = valitudTegelased.slice();
        const indeks = tegelased.indexOf(tegelane);
        if (indeks !== -1) {
        tegelased.splice(indeks,1);
        uuendaValitudTegelased (tegelased);
        }

    }
    function tyhjendaValik () {
        const tegelased = [];
        uuendaValitudTegelased (tegelased);
    }

    function tegelasteVanusedKokku() {
        let summa = 0;
        valitudTegelased.forEach (tegelane => summa += tegelane.vanus);
        return summa;
    }
    function tegelasteKeskmineVanusKokku() {
        let keskmine = 0;
        let tegelasteArv = valitudTegelased.length;
        valitudTegelased.forEach (tegelane => keskmine += tegelane.vanus/tegelasteArv);
        return Math.round(keskmine);
    }
    function mituTegelastKokku() {
        let tegelasteArv= valitudTegelased.length;
        return tegelasteArv;
    }

return (
    <div>
            {valitudTegelased.length !== 0 && <button onClick={tyhjendaValik}>Kustuta kõik valitud</button>}

            {valitudTegelased.map(tegelane =>
        <div >
            <div> {tegelane.eesnimi} {tegelane.perekonnanimi}, {tegelane.vanus} aastane </div><br/>
            <button onClick={() => valiTegelane (tegelane)}>Lisa</button>
            <button onClick={() => kustutaTegelane (tegelane)}>Eemalda</button><br/><br/>
        </div>)}
            {valitudTegelased.length !== 0 && <div>Vanuste summa kokku: {tegelasteVanusedKokku()}</div>}
            {valitudTegelased.length !== 0 && <div>Tegelaste keskmine vanus: {tegelasteKeskmineVanusKokku()}</div>}
            {valitudTegelased.length !== 0 && <div>Tegelasi kokku: {mituTegelastKokku()}</div>}
            {valitudTegelased.length === 0 && <div>Ühtegi tegelast pole valitud!</div>}
    </div>
    );
}

export default Tegelased;