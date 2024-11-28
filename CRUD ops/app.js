let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let submit = document.getElementById("submit");
let search = document.getElementById("search");
let productRow = document.getElementById("productRow");
let error = document.getElementById("errorMsg");
let allProducts = [];

let myIDX;

if (localStorage.getItem("allProduct")) {
  allProducts = JSON.parse(localStorage.getItem("allProduct"));
  displayProducts();
}

submit.addEventListener("click", () => {
  if (productName.value && productPrice.value) {
    if (submit.innerText === "Submit") {
      const product = {
        name: productName.value,
        price: productPrice.value,
      };
      allProducts.push(product);
      localStorage.setItem("allProducts", JSON.stringify(allProducts));
      error.style.visibility = "hidden";
      displayProducts();
      clearData();
    } else {
      allProducts[myIDX].name = productName.value;
      allProducts[myIDX].price = productPrice.value;
      localStorage.setItem("allProducts", JSON.stringify(allProducts));
      displayProducts();
      clearData();
      submit.innerText = "Submit";
    }
  } else {
    error.style.visibility = "visible";
  }
});

search.addEventListener("keyup", (event) => searchProduct(event.target.value));

function displayProducts() {
  productRow.innerHTML = "";
  for (let i = 0; i < allProducts.length; i++) {
    productRow.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${allProducts[i].name}</td>
        <td>${allProducts[i].price}</td>
        <td> <button class="btn btn-outline-warning" onClick={updateProduct(${i})}>Update</button> </td>
        <td> <button class="btn btn-outline-danger" onClick={deleteProduct(${i})}>Delete</button> </td>
        </tr>`;
  }
}

function clearData() {
  productName.value = "";
  productPrice.value = "";
}

function updateProduct(index) {
  productName.value = allProducts[index].name;
  productPrice.value = allProducts[index].price;
  submit.innerHTML = "Update";
  myIDX = index;
}

function deleteProduct(index) {
  allProducts.splice(index, 1);
  localStorage.setItem("allProducts", JSON.stringify(allProducts));
  displayProducts();
  clearData();
}

function searchProduct(term) {
  // 1 --
  // let filteredProducts = allProducts.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()));

  // 2 --
  productRow.innerHTML = "";
  for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].name.toLowerCase().includes(term.toLowerCase()))
      productRow.innerHTML += `
        <tr>
        <td>${i + 1}</td>
        <td>${allProducts[i].name}</td>
        <td>${allProducts[i].price}</td>
        <td> <button class="btn btn-outline-warning" onClick='updateProduct(${i})'>Update</button> </td>
        <td> <button class="btn btn-outline-danger" onClick='deleteProduct(${i})'>Delete</button> </td>
        </tr>`;
  }
}
