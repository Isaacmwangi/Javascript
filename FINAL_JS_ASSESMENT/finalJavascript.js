const apiEndpoint = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Music Festival",
    price: 50,
    date: "August 20, 2021",
    location: "Central Park, New York City",
    company: "Music Festivals Inc.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Food and Wine Expo",
    price: 75,
    date: "September 25, 2021",
    location: "Moscone Center, San Francisco",
    company: "Food and Wine Events LLC",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Comic Con",
    price: 35,
    date: "October 15, 2021",
    location: "Los Angeles Convention Center",
    company: "Comic Con International",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwZGVzaWduJTIwZmFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Art and Design Fair",
    price: 20,
    date: "November 12, 2021",
    location: "Navy Pier, Chicago",
    company: "Art and Design Expo LLC",
  },
  {
    id: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Holiday Market",
    price: 5,
    date: "December 3, 2021",
    location: "Union Square, New York City",
    company: "Holiday Markets Inc.",
  },
  {
    id: 6,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Concert in the Park",
    price: 20,
    date: "August 20, 2022",
    location: "Central Park, New York City",
    company: "Live Nation",
  },
  {
    id: 7,
    imageUrl:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Food and Wine Festival",
    price: 50,
    date: "September 15-18, 2022",
    location: "Union Square, San Francisco",
    company: "Taste of San Francisco",
  },
  {
    id: 8,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Beach Party",
    price: 15,
    date: "July 3, 2022",
    location: "Venice Beach, Los Angeles",
    company: "LA Beach Parties",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Angular Nation Expo",
    price: 35,
    date: "October 1-3, 2022",
    location: "Google Hall, San Fransico",
    company: "ArtExpo NY",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sports and Adventure Expo",
    price: 20,
    date: "May 20-22, 2022",
    location: "McCormick Place, Chicago",
    company: "Google",
  },
];

document.body.style.width = "100vw";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.flexWrap = "wrap";

const addedDataJSON = [];

function addProducts(data) {
  try {
    addedDataJSON.push(...data);
    populateProducts();
  } catch (error) {
    console.error("Failed to add products:", error);
  }
}

//my function to populate Products
function populateProducts() {
  const mainContainer = document.createElement("main");
  document.body.appendChild(mainContainer);
  mainContainer.style.display = "flex";
  mainContainer.style.flexWrap = "wrap";

  const myData = addedDataJSON.map((product) => {
    const productContainer = document.createElement("div");
    mainContainer.appendChild(productContainer);
    productContainer.style.display = "flex";
    productContainer.style.flexDirection = "column";
    productContainer.style.backgroundColor = "white";
    productContainer.style.padding = "5px";
    productContainer.style.width = "200px";

    // Image container
    const imageContainer = document.createElement("div");
    productContainer.appendChild(imageContainer);

    const image = document.createElement("img");
    image.src = `${product.imageUrl}`;
    image.style.width = "100%";
    image.style.height = "250px";
    imageContainer.appendChild(image);

    // Description container
    const descriptionContainer = document.createElement("div");
    productContainer.appendChild(descriptionContainer);
    descriptionContainer.style.height = "160px";
    descriptionContainer.style.borderColor = "black";
    descriptionContainer.style.borderWidth = "3px";
    descriptionContainer.style.borderStyle = "solid";
    descriptionContainer.style.padding = "3px";
    descriptionContainer.style.textAlign = "center";

    // Article
    const article = document.createElement("article");
    descriptionContainer.appendChild(article);
    article.style.marginTop = "10px";
    article.style.textAlign = "center";

    // Section
    const listContainer = document.createElement("section");
    descriptionContainer.appendChild(listContainer);
    listContainer.style.borderWidth = "20px";
    listContainer.style.borderColor = "black";
    listContainer.style.width = "100%";
    listContainer.style.listStyleType = "none";
    listContainer.style.paddingBottom = "20px";

    // Title
    const title = document.createElement("p");
    title.textContent = `${product.title}`;
    article.appendChild(title);
    title.style.fontSize = "15px";
    title.style.fontWeight = "700";
    title.style.textAlign = "center";

    // Company
    const company = document.createElement("li");
    company.textContent = `${product.company}`;
    listContainer.appendChild(company);

    // Location
    const location = document.createElement("li");
    location.textContent = `${product.location}`;
    listContainer.appendChild(location);

    // Price
    const price = document.createElement("li");
    price.textContent = `ksh ${product.price}`;
    listContainer.appendChild(price);

    const cartButtons = document.createElement("div");
    cartButtons.classList.add("cart-buttons");
    productContainer.appendChild(cartButtons);

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Item";
    addBtn.onclick = () => addToCart(product);
    cartButtons.appendChild(addBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Item";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteProductFromCart(product.id);
    cartButtons.appendChild(deleteBtn);
  });
}


const cart = [];

function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}


function deleteProductFromCart(productId) {
  const index = cart.findIndex((item) => item.id === productId);
  if (index !== -1) {
    const product = cart[index];
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      cart.splice(index, 1);
    }
    updateCartUI();
  } else {
    console.error("Item not found in cart.");
  }
}



function increaseProductQuantity(productId) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity += 1;
  }
  updateCartUI();
}

function reduceProductQuantity(productId) {
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex !== -1) {
    const product = cart[productIndex];
    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      cart.splice(productIndex, 1);
    }
  }
  updateCartUI();
}

function editProductInCart(productId, newQuantity) {
  const product = cart.find((item) => item.id === productId);
  if (product) {
    product.quantity = newQuantity;
  }
  updateCartUI();
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById("cartItems");
  if (!cartItemsContainer) {
    console.error("Cart items container not found.");
    return;
  }

  // Clear previous cart items
  cartItemsContainer.innerHTML = "";

  // Create and append cart item elements
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const title = document.createElement("p");
    title.textContent = item.title;
    cartItem.appendChild(title);

    const quantity = document.createElement("p");
    quantity.textContent = `Quantity: ${item.quantity}`;
    cartItem.appendChild(quantity);

    cartItemsContainer.appendChild(cartItem);
  });
}


addProducts(apiEndpoint);
