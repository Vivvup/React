function Tegelased() {
    function saaTegelased() {
        return [{eesnimi:"Mickey", perekonnanimi:"Mouse", elukoht:"Disneyland"},
                {eesnimi:"Minnie", perekonnanimi:"Mouse", elukoht:"Disneyland"},
                {eesnimi:"Winnie", perekonnanimi:"Pooh", elukoht:"Hundred Acre Wood"},
                {eesnimi:"Roo", perekonnanimi:"Kangaroo", elukoht:"Hundred Acre Wood"},
                {eesnimi:"Scooby", perekonnanimi:"Doo", elukoht:"Crystal Cove"}];
    }

    function saadaTegelaneKoju() {
       console.log ("Tegelane läks koju" );
    }

return (
    <div>
            {saaTegelased().map(tegelane =>
        <div key={tegelane.eesnimi} className="tegelane">
            <div>{tegelane.eesnimi + " " + tegelane.perekonnanimi}</div><br/>
            <button onClick={saadaTegelaneKoju}>Saada tegelane koju</button><br/><br/>
        </div>)}
    </div>
    );
}

export default Tegelased;