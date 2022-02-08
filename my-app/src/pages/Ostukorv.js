import { useState } from 'react';

function Ostukorv() {
    const [ostukorviEsemed, uuendaOstukorvi] = useState (saaOstukorv());

    function saaOstukorv (){
        // return [
        //     {nimi: "Rolex", maksumus: 5999, aktiivne: true}, 
        //     {nimi: "Tag Heuer", maksumus: 3999, aktiivne: false},
        //     {nimi: "Hugo Boss", maksumus: 499, aktiivne: true}        
        // ];

        if (sessionStorage.getItem("ostukorv")) {
            return JSON.parse(sessionStorage.getItem("ostukorv"));
        } else {
            return [];
        }
    }

    function lisaOstukorvi (toode) {
        console.log("ostukorvi lisatud!");
        console.log(toode);
        const tooted = ostukorviEsemed.slice();
        console.log(tooted);
        tooted.push(toode);
        console.log(tooted);
        sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
        uuendaOstukorvi (tooted);
    }

    function kustutaOstukorvist(toode) {
        console.log("ostukorvist kustutatud!");
        console.log(toode);
        let tooted = ostukorviEsemed.slice();
        let indeks = tooted.indexOf(toode);
        if (indeks !== -1) {
        tooted.splice(indeks,1);
        sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
        uuendaOstukorvi (tooted);
        }
    }

        function tyhjendaOstukorv() {
            const tooted = [];
            sessionStorage.setItem("ostukorv", JSON.stringify(tooted));
            uuendaOstukorvi (tooted);
        }

        function ostukorviSumma() {
            let summa = 0;
            ostukorviEsemed.forEach (element => summa += Number(element.hind));
            return summa;
        }

        function maksa() {
            const andmed = {
              "api_username": "92ddcfab96e34a5f",
              "account_name": "EUR3D1",
              "amount": ostukorviSumma (),
              "order_reference": "624233",
              "nonce": "a9b7f7e79asdareds97d83154a01b9902" + new Date(),
              "timestamp": new Date (),
              "customer_url": "https://www.postimees.ee"
              };

        fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
         {
            method: "POST",
            body: JSON.stringify(andmed),
            headers: {
            "Content-Type": "application/json",   
            "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
            }
        }
    ).then(res => res.json())
    .then(data => console.log (data.payment_link));
  }
    return (
    <div>
        {ostukorviEsemed.length !== 0 && <button onClick={tyhjendaOstukorv}>Tühjenda ostukorv</button>}
        {ostukorviEsemed.map (element =>
        <div>
            
            <div>{element.nimetus}</div>
            <div>{element.hind}</div>
            <div>{element.aktiivne}</div>
            <button onClick={() => lisaOstukorvi (element)}>+</button>
            <button onClick={() => kustutaOstukorvist (element)}>X</button>
        

        </div> )
    } 
   {ostukorviEsemed.length !== 0 && <div>Kokku: {ostukorviSumma()}</div>}
   {ostukorviEsemed.length !== 0 && <button onClick = {maksa}>Maksma</button>}
   {ostukorviEsemed.length === 0 && <div>Ostukorv on tühi!</div>}
    </div> );
}

export default Ostukorv;