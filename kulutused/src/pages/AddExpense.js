import {useRef} from 'react';

function AddExpense () {
    const nameRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    function submitExpense(event){
        event.preventDefault();
        console.log("s6num");
        console.log(nameRef.current.value);
        console.log(priceRef.current.value);
        console.log(categoryRef.current.value);
        let expenses = JSON.parse(localStorage.getItem("expenses"));
        console.log(expenses);
        const expense = {
            name: nameRef.current.value,
            price: priceRef.current.value,
            category: categoryRef.current.value
        }
        console.log(expense);
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));

    }

    return (
    <form onSubmit={submitExpense}>
        <label>Kulutus</label> <br />
        <input ref = {nameRef}/> <br />
        <label>Kulutuse summa</label> <br />
        <input ref = {priceRef}/> <br />
        <label>Kulutuse liik</label> <br />
        <input ref = {categoryRef}/> <br />
        <button>Lisa kulutus</button>
    </form>);
}
export default AddExpense;