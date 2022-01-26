import { useState } from 'react';

function Ostukorv() {
    const [ostukorviEsemed, uuendaOstukorvi] = useState (saaOstukorv());

    function saaOstukorv (){
        return [
            {nimi: "Rolex", maksumus: 5999, aktiivne: true}, 
            {nimi: "Tag Heuer", maksumus: 3999, aktiivne: false},
            {nimi: "Hugo Boss", maksumus: 499, aktiivne: true}        
        ];
    }

    function lisaOstukorvi (toode) {
        console.log("ostukorvi lisatud!");
        console.log(toode);
        const tooted = ostukorviEsemed.slice();
        console.log(tooted);
        tooted.push(toode);
        console.log(tooted);
        uuendaOstukorvi (tooted);
    }

    function kustutaOstukorvist(toode) {
        console.log("ostukorvist kustutatud!");
        console.log(toode);
        let tooted = ostukorviEsemed.slice();
        let indeks = tooted.indexOf(toode);
        if (indeks !== -1) {
        tooted.splice(indeks,1);
        uuendaOstukorvi (tooted);
        }
    }

        function tyhjendaOstukorv() {
            const tooted = [];
            uuendaOstukorvi (tooted);
        }

        function ostukorviSumma() {
            let summa = 0;
            ostukorviEsemed.forEach (element => summa += element.maksumus);
            return summa;
        }

    return (
    <div>
        {ostukorviEsemed.length !== 0 && <button onClick={tyhjendaOstukorv}>Tühjenda ostukorv</button>}
        {ostukorviEsemed.map (element =>
        <div>
            
            <div>{element.nimi}</div>
            <div>{element.maksumus}</div>
            <div>{element.aktiivne}</div>
            <button onClick={() => lisaOstukorvi (element)}>+</button>
            <button onClick={() => kustutaOstukorvist (element)}>X</button>
        

        </div> )
    } 
   {ostukorviEsemed.length !== 0 && <div>Kokku: {ostukorviSumma()}</div>}
   {ostukorviEsemed.length === 0 && <div>Ostukorv on tühi!</div>}
    </div> );
}

export default Ostukorv;