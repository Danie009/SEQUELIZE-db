
const { getAllProducts } = require('./data-fetching'); 
const page = 1;

const pageSize = 100;

async function fetchProducts() {
  try {
    const products = await getAllProducts.findAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
      order: [['createdAt', 'DESC']],
    });
    
    // Handle or process the retrieved products here
    
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
