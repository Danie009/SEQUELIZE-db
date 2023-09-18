const { getAllClients } = require('./data-fetching'); 

async function fetchData() {
  try {
   
    const clients = await getAllClients();
    console.log(clients);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


fetchData();

