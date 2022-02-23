
import {useEffect, useState} from 'react';
function PackageMachines () {
    const [packageMachines, setPackageMachines] = useState ([]);
    const [selectedMachine, setSelectedMachines] = useState (null);

    useEffect(()=>{
        fetch ("https://www.omniva.ee/locations.json")
        .then(res => res.json())
        .then (body => setPackageMachines(body));

    },[]);

    function chooseMachine (packageMachine) {
        console.log(selectedMachine);
        console.log(packageMachine);
        setSelectedMachines(packageMachine);
        console.log(selectedMachine);

    }

    function deleteMachine() {
        setSelectedMachines (null);
      }
    
    return (
        <div>
        { !selectedMachine && <select>{packageMachines
            .filter(element => element.A0_NAME == "EE")
            .map(element => <option onClick={() => chooseMachine(element)}>{element.NAME}</option> )}</select>
        }
    { selectedMachine && <div>{selectedMachine} <button onClick={deleteMachine}>X</button></div> }
    </div>);
}
export default PackageMachines;