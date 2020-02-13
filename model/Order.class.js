class Order {
  constructor() {
    this.getOrders();
    console.log(this.getOrders());
  }

  getOrders() {

    fetch('https://raw.githubusercontent.com/popina/test-javascript/master/data.json')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            document.getElementById('total').innerHTML = data.orders.map(ordersTemplate).join('');
        })
        .catch(error => console.log('ERROR : ' + error));

  }
}
