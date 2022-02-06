
import { Link } from 'react-router-dom';

function Andmebaas () {

    function saaTegelased() {
        return [{eesnimi:"Mickey", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:55, pilt: "https://pixy.org/src/62/621442.jpg" },
                {eesnimi:"Minnie", perekonnanimi:"Mouse", elukoht:"Disneyland", vanus:45, pilt: "https://pixy.org/src/67/678559.jpg"},
                {eesnimi:"Winnie", perekonnanimi:"Pooh", elukoht:"Hundred Acre Wood", vanus:35, pilt: "https://pixy.org/src/51/511569.png"},
                {eesnimi:"Roo", perekonnanimi:"Kangaroo", elukoht:"Hundred Acre Wood", vanus:65, pilt: "https://cdn.pixabay.com/photo/2016/06/07/08/39/kangaroo-1441197_960_720.jpg"},
                {eesnimi:"Scooby", perekonnanimi:"Doo", elukoht:"Crystal Cove", vanus:25, pilt: "https://pixy.org/src/50/505156.jpg"}];
    }
    localStorage.setItem ("tegelased", JSON.stringify (saaTegelased()));

    const tegelased = JSON.parse(localStorage.getItem("tegelased"));
    
    return (
        
        <div> {tegelased.map(tegelane =>
                <div >
                     <Link to={"/tegelane/" + tegelane.eesnimi.toLowerCase().replace(" ","-")}>
                     <img src= {tegelane.pilt} alt=""/><br/><br/>
                    <div> {tegelane.eesnimi} {tegelane.perekonnanimi}, {tegelane.vanus} aastane </div><br/>
                    </Link>
                </div>)}
        
        </div>);
}
export default Andmebaas;