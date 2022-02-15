
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



function Tegelased() {
    const [valitudTegelased, uuendaValitudTegelased] = useState ([]);

    useEffect(() => {
        fetch ("https://ylesanded-e629f-default-rtdb.europe-west1.firebasedatabase.app/tegelased.json")
        .then(response => {
            return response.json();
        }). then (data => {
            console.log(data)
            const newArray = [];
            for (const key in data) {
                newArray.push(data[key]);
            }
            console.log(newArray);
            uuendaValitudTegelased(newArray);
           }
        );

     },[])   //et ei läheks lõputusse loopi

    // function saaTegelased() {
    //     return [{eesnimi:"Mickey", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:55, pilt: "https://pixy.org/src/62/621442.jpg" },
    //             {eesnimi:"Minnie", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:45, pilt: "https://pixy.org/src/67/678559.jpg"},
    //             {eesnimi:"Winnie", perekonnanimi:"Pooh", elukoht:"Hundred Acre Wood", vanus:35, pilt: "https://pixy.org/src/51/511569.png"},
    //             {eesnimi:"Roo", perekonnanimi:"Kangaroo", elukoht:"Hundred Acre Wood", vanus:65, pilt: "https://cdn.pixabay.com/photo/2016/06/07/08/39/kangaroo-1441197_960_720.jpg"},
    //             {eesnimi:"Scooby", perekonnanimi:"Doo", elukoht:"Crystal Cove", vanus:25, pilt: "https://pixy.org/src/50/505156.jpg"}];
    // }
    
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
        valitudTegelased.forEach (tegelane => summa += Number(tegelane.vanus));
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
    function maksa() {
        const andmed = {
          "api_username": "92ddcfab96e34a5f",
          "account_name": "EUR3D1",
          "amount": tegelasteVanusedKokku(),
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
// .then(data => console.log (data.payment_link));
.then (data => window.location.href = data.payment_link);
}

return (
    <div>
            <Link to="/tegelased/lisa">
                <button >Lisa uus tegelane</button>
           </Link>
            {valitudTegelased.length !== 0 && <button onClick={tyhjendaValik}>Kustuta kõik valitud</button>}<br/><br/>

            {valitudTegelased.map(tegelane =>
        <div >
            <Link to={"/tegelane/" + tegelane.eesnimi.toLowerCase().replace(" ","-")}>
            <img src= {tegelane.pilt} alt=""/><br/><br/>
            <div> {tegelane.eesnimi} {tegelane.perekonnanimi}, {tegelane.vanus} aastane </div><br/>
            </Link>
            <button onClick={() => valiTegelane (tegelane)}>Lisa</button>
            <button onClick={() => kustutaTegelane (tegelane)}>Eemalda</button><br/><br/>
        </div>)}
            {valitudTegelased.length !== 0 && <div>Vanuste summa kokku: {tegelasteVanusedKokku()}</div>}
            {valitudTegelased.length !== 0 && <div>Tegelaste keskmine vanus: {tegelasteKeskmineVanusKokku()}</div>}
            {valitudTegelased.length !== 0 && <div>Tegelasi kokku: {mituTegelastKokku()}</div>}
            {valitudTegelased.length !== 0 && <button onClick = {maksa}>Maksma</button>}
            {valitudTegelased.length === 0 && <div>Ühtegi tegelast pole valitud!</div>}
    </div>
    );
}

export default Tegelased;