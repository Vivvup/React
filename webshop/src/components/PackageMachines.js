
import {useEffect, useState} from 'react';
function PackageMachines () {
    const [packageMachines, setPackageMachines] = useState ([]);
    const [selectedMachine, setSelectedMachines] = useState (null);

    useEffect(()=>{
        fetch ("https://www.omniva.ee/locations.json")
        .then(res => res.json()) // koos statuscode-ga, headeritega, url-ga..... {console.log(res); res.json()}
        .then (body => setPackageMachines(body));  // sisu kätte

    },[]);

    function chooseMachine (event) {
        console.log(selectedMachine);
        //console.log(packageMachine);
        setSelectedMachines(event.target.value);
        console.log(selectedMachine);

    }

    function deleteMachine() {
        setSelectedMachines (null);
      }
    
    return (
        <div>
        { !selectedMachine && <select onChange={chooseMachine}>{packageMachines
            .filter(element => element.A0_NAME == "EE")
            .map(element => <option>{element.NAME}</option> )}</select>
        }
    { selectedMachine && <div>{selectedMachine} <button onClick={deleteMachine}>X</button></div> }
    </div>);
}
export default PackageMachines;