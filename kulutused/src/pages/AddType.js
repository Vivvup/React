import {useState, useRef} from 'react';

function AddType(){
    const typeRef = useRef();
    const [expTypes, newExpTypes] = useState(getTypes());

    function getTypes() {
        if (localStorage.getItem("types")) {
            return JSON.parse(localStorage.getItem("types"));
        } else {
            const types = [];
            localStorage.setItem("types", JSON.stringify(types));
            return types;
        }   
    }

    function addExpenseType(event) {
        event.preventDefault();
        console.log("toimib");
        console.log(typeRef.current.value);
        if (localStorage.getItem("types")) {
            let types = JSON.parse(localStorage.getItem("types"));
            types.push(typeRef.current.value);
            console.log(types);
            localStorage.setItem("types", JSON.stringify(types));
            newExpTypes(types);
        } else {
            localStorage.setItem("types", JSON.stringify(typeRef.current.value));
            newExpTypes([typeRef.current.value]);
        }
    }

    return (<div>
        <div>{expTypes.map(expenseType => <div>{expenseType}</div>)}</div><br />
        <form>
            <label>Kulutuse liik</label> <br />
            <input ref={typeRef} /><br />
            <button onClick = {addExpenseType}>Lisa</button>
        </form>

    </div>);
}

export default AddType;