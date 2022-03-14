function History () {

    function getHistory () {
        if (JSON.parse(localStorage.getItem("history"))) {
            return JSON.parse(localStorage.getItem("history"));
        } else {
            return [];
        }   
    }
    return (
    <div> {getHistory().map(expense => <div>{expense.name} | {expense.price} eur | {expense.category}</div>)}
     </div>);
}
export default History;