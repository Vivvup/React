function Overview() {
    
    function expenses() {
        return [
            {name: "piim", price: 1, category: "food"}, 
            {name: "jogurt", price: 3, category: "food"},
            {name: "leib", price: 3, category: "food"}, 
            {name: "mobiiltelefon", price: 400, category: "technology"}
        ];      
    }

    return (
    <div>
        {expenses().map(expense => 
         <div>{expense.name},<br />
              {expense.price} eur <br /><br />
         </div>)}
    </div>);
}
export default Overview;