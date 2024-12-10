
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');
  
    if (productsContainer) {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
          console.log(products);
          products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
      
            productCard.innerHTML = `
              <img src="${product.image}" alt="${product.title}">
              <h3>${product.title}</h3>
              <p>Price: $${product.price}</p>
              <p>${product.description.slice(0, 100)}...</p>
            `;
      
            productsContainer.appendChild(productCard);
          });
        })
        .catch(error => console.error('Error fetching products:', error));
      
    }
  });