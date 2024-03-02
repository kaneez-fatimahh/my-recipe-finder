let container = document.getElementById("container1");
let input = document.getElementById("input");
let searchBtn = document.getElementById("search-btn");
let spinner = document.getElementById("spinner");
let banner = document.getElementById("banner");
//let body = document.getElementsByTagName("body");

//let loadingBar = document.getElementById("loadingBar");

//meat
let fetchMeatDishes = async () => {
  try {
  //  loadingBar.style.width = "60%";
    let url = `https://api.edamam.com/search?q=meat&app_id=eaa27b60&app_key=f02d46b15e42e56c3137f24194783f50&from=0&to=100`;
    let response = await fetch(url);
    let data = await response.json();
    let recipe = data.hits;
    console.log(data);
   
    banner.style.display = "none";
    container.style.display = "block";
    container.innerHTML = "";
  //  loadingBar.style.width = "100%";
  //   setTimeout(() => {
  //     loadingBar.style.display = "none";
  //   }, 2000);
    display(recipe);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  input.value = "";
  console.log("hyyy meat");
};

// vegetables
let fetchVegDishes = async () => {
  try {
    loadingBar.style.width = "60%";

    let url = `https://api.edamam.com/search?q=vegetables&app_id=eaa27b60&app_key=f02d46b15e42e56c3137f24194783f50&from=0&to=100`;
    let response = await fetch(url);
    let data = await response.json();
    let recipe = data.hits;
    console.log(data);
    loadingBar.style.width = "100%";
    setTimeout(() => {
      loadingBar.style.display = "none";
    }, 2000);
    banner.style.display = "none";
    container.style.display = "block";
    container.innerHTML = "";
    display(recipe);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  input.value = "";
  console.log("hyyy meat");
};
//sea-food
let fetchSeaFood = async () => {
  try {
    loadingBar.style.width = "60%";
    let url = `https://api.edamam.com/search?q=sea-food fish&app_id=eaa27b60&app_key=f02d46b15e42e56c3137f24194783f50&from=0&to=100`;
    let response = await fetch(url);
    let data = await response.json();
    let recipe = data.hits;
    console.log(data);
    loadingBar.style.width = "100%";
    setTimeout(() => {
      loadingBar.style.display = "none";
    }, 2000);
    container.innerHTML = "";
    banner.style.display = "none";
    container.style.display = "block";
    container.innerHTML = "";
    display(recipe);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  input.value = "";
  console.log("hyyy meat");
};
//desert
let fetchDeserts = async () => {
  try {
    loadingBar.style.width = "60%";
    let url = `https://api.edamam.com/search?q=sweet deserts&app_id=eaa27b60&app_key=f02d46b15e42e56c3137f24194783f50&from=0&to=100`;
    let response = await fetch(url);
    let data = await response.json();
    let recipe = data.hits;
    console.log(data);
    loadingBar.style.width = "100%";
    setTimeout(() => {
      loadingBar.style.display = "none";
    }, 2000);
    banner.style.display = "none";
    container.style.display = "block";

    container.innerHTML = "";
    display(recipe);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  input.value = "";
  console.log("hyyy meat");
};
//juices
let fetchJuices = async () => {
  try {
    loadingBar.style.width = "60%";
    let url = `https://api.edamam.com/search?q=juice&app_id=eaa27b60&app_key=f02d46b15e42e56c3137f24194783f50&from=0&to=100`;
    let response = await fetch(url);
    let data = await response.json();
    let recipe = data.hits;
    console.log(data);
    loadingBar.style.width = "100%";
    setTimeout(() => {
      loadingBar.style.display = "none";
    }, 2000);
    banner.style.display = "none";
    container.style.display = "block";

    container.innerHTML = "";
    display(recipe);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  input.value = "";
  console.log("hyyy meat");
};
let fetchSearch = async (e) => {
  e.preventDefault();
  try {
    loadingBar.style.width = "60%";
    let url = `https://api.edamam.com/search?q=${input.value}&app_id=eaa27b60&app_key=f02d46b15e42e56c3137f24194783f50&from=0&to=100`;
    let response = await fetch(url);
    let data = await response.json();
    let recipe = data.hits;
    console.log(data);
    loadingBar.style.width = "100%";
    setTimeout(() => {
      loadingBar.style.display = "none";
    }, 2000);
    banner.style.display = "none";
    container.innerHTML = "";
    display(recipe);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  input.value = "";
};

let display = (recipe) => {
  if (recipe.length === 0) {
    let msg = document.createElement("h5");
    msg.style.marginTop = "150px"
    msg.innerText = "No Recipes Found";
    container.appendChild(msg);

  }

  recipe.forEach((recipeItem, i) => {
    let output = document.createElement("div");
    output.innerHTML += `
      <div class="" style="margin-top:90px;">
  <img src="${
    recipeItem.recipe.image
  }" alt="" style="max-width: 270px; margin-bottom: 20px; margin-top: 20px">
  <div>
    <h2>${recipeItem.recipe.label}</h2>
    ${recipeItem.recipe.cuisineType
      .map(
        (cuisine) =>
          `<p>Dish Type :<strong> ${
            cuisine.charAt(0).toUpperCase() + cuisine.slice(1)
          }</strong></p>`
      )
      .join("")}
    <p>Meal Type : <strong>Lunch/Dinner</strong></p>
    <h3>Ingredients</h3>
    <p>${recipeItem.recipe.ingredientLines}</p>
    <button type="button" class="btn" style="background-color:#5b9240;"> 
     <a target="_blank" href="${
      recipeItem.recipe.url
    }" id="Vegetables" style="text-decoration: none; color:black!important; ">Get Recipe</a></button>

  </div>
    </div>
    <hr>
       `;
    container.appendChild(output);
  });
};

const show = (recipeItem) => {
  document.getElementById("ingd" + recipeItem).classList.toggle("d-none");
};
