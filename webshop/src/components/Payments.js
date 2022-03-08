function Payment (props){
    function onPay() {
        const paymentData = {
          "api_username": "92ddcfab96e34a5f",
          "account_name": "EUR3D1",
          "amount": props.sumOfCart,
          "order_reference": Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
          "nonce": "a9b7f7e79asdareds97d83154a01b9902" + new Date(),
          "timestamp": new Date (),
          "customer_url": "https://www.webshopvp.web.app/tellimus"
          };

    fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
     {
        method: "POST",
        body: JSON.stringify(paymentData),
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
        <button className="paymentButton" onClick = {onPay}>Maksa</button> 
    );
}

export default Payment;