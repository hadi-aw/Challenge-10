// U51313007
// Load CSV data and append list items to the DOM
d3.csv("data/purchase_orders.csv").then(data => {
    data.forEach(order => {
        d3.select("#orders")
          .append("li")
          .text(`${order.customerName} - Order ID: ${order.orderId} Purchase Amount: ${order.purchaseAmount}`);
    });
});