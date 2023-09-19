const { getAllOrders } = require('./data-fetching'); 

async function fetchData() {
  try {
    const clients = await getAllOrders();
    console.log(clients); // Corrected variable name to log clients

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
