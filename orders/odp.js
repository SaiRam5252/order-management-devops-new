function order(orderID)
{
    console.log('Order ID is :' +orderID);
    /* get order information */
    fetch(orderID)
    .then(result)
    .catch(error)
    .finally()
}