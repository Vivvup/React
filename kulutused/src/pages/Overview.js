import {useState} from 'react';

function Overview() {
   const [exp, newExpenses]= useState(getExpenses());
    
    function getExpenses() {
        if (localStorage.getItem("expenses")){
            return JSON.parse(localStorage.getItem("expenses"));
        } else {
            const expenses = [
                {name: "piim", price: 1, category: "food"}, 
                {name: "jogurt", price: 3, category: "food"},
                {name: "leib", price: 3, category: "food"}, 
                {name: "mobiiltelefon", price: 400, category: "technology"}
            ];  
            localStorage.setItem("expenses", JSON.stringify(expenses));   
            return expenses; 
        }  
    }

    function deleteExpense (expense) {
        console.log (expense);
        let expenses = JSON.parse(localStorage.getItem("expenses"));
        const index = expenses.findIndex(exp => exp.name ===expense.name);
        console.log(index);
        expenses.splice(index, 1);
        localStorage.setItem("expenses", JSON.stringify(expenses));
        if (localStorage.getItem("history")) {
            let history = JSON.parse(localStorage.getItem("history"));
            history.push(expense);
            localStorage.setItem("history", JSON.stringify(history));
        } else {
            localStorage.setItem("history", JSON.stringify([expense]));
        }
        newExpenses(expenses);
    }

    return (
    <div>
        {exp.map(expense => 
         <div>{expense.name},<br />
              {expense.price} eur <br />
              <button onClick={() => deleteExpense (expense)}>X</button><br /><br />
         </div>)}
    </div>);
}
export default Overview;