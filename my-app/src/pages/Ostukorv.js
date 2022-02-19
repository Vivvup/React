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

    function lisaOstukorviKogust (toode) {
        toode.kogus++;
        uuendaOstukorvi(ostukorviEsemed.slice());
        sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviEsemed));
    }

    function v2hendaOstukorvistKogust(toode) {
        toode.kogus--;
        if (toode.kogus === 0) {
            tyhjendaOstukorv(toode);
        }
        uuendaOstukorvi (ostukorviEsemed.slice());
        sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviEsemed));   
    }

        function tyhjendaOstukorv(toode) {
            const indeks = ostukorviEsemed.indexOf(toode);
            ostukorviEsemed.splice(indeks,1);
            uuendaOstukorvi(ostukorviEsemed.slice());
            sessionStorage.setItem("ostukorv", JSON.stringify(ostukorviEsemed));
            
        }

        function ostukorviSumma() {
            let summa = 0;
            ostukorviEsemed.forEach (element => summa += element.ostukorviToode.hind * element.kogus);
            return summa;
        }

        function maksa() {
            const andmed = {
              "api_username": "92ddcfab96e34a5f",
              "account_name": "EUR3D1",
              "amount": ostukorviSumma (),
              "order_reference": Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
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
    // .then(data => console.log (data.payment_link));
    .then (data => window.location.href = data.payment_link);
  }
    return (
    <div>
        {ostukorviEsemed.length !== 0 && <button onClick={tyhjendaOstukorv}>Tühjenda ostukorv</button>}
        {ostukorviEsemed.map (element =>
        <div className="toode">
            
            <div>{element.ostukorviToode.nimetus}</div>
            <div>{element.ostukorviToode.hind} €</div>
            <img src= {element.ostukorviToode.pilt} /><br />
            <button onClick={() => v2hendaOstukorvistKogust (element)}>-</button>
            <div>{element.kogus} tk</div>
            <button onClick={() => lisaOstukorviKogust (element)}>+</button>
            <div>KOKKU: {element.ostukorviToode.hind * element.kogus} € </div>
            <button onClick={() => tyhjendaOstukorv (element)}>X</button>
            <br /><br />

        </div> )
    } 
   {ostukorviEsemed.length !== 0 && <div>Kokku: {ostukorviSumma()} eur</div>}
   {ostukorviEsemed.length !== 0 && <button className = "red" onClick = {maksa}>Maksma</button>}
   {ostukorviEsemed.length === 0 && <div>Ostukorv on tühi!</div>}
    </div> );
}

export default Ostukorv;