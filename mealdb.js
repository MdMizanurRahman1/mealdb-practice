const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}


const displayMeals = meals => {
    // console.log(meals);
    //1.to get the element container
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerText = '';

    meals.forEach(meal => {
        console.log(meal);

        //2. create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        //3 set the text for each child element
        mealDiv.innerHTML = `
        <div class="card h-100">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                    <p class="card-text">${meal.strYoutube}</p>
                    <!-- Button trigger modal -->
                    <button onclick="idMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                     Details
                    </button>
                </div>
        </div>
        
        `;

        //4 add to the append child
        mealContainer.appendChild(mealDiv);
    })


}

//search field

const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;

    loadMeals(searchText);
}


//modal area

const idMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadMealDetails(data.meals[0]))
}

const loadMealDetails = loadMeal => {
    document.getElementById('mealDetailsLabel').innerText = loadMeal.strMeal;

    const mealDetailDiv = document.getElementById('mealDetailDiv');
    mealDetailDiv.innerHTML = `
    <p class="card-text">Youtube: ${loadMeal.strYoutube}</p>
    <p class="card-text">Source: ${loadMeal.strSource}</p>
    <p class="card-text">Area: ${loadMeal.strArea}</p>
    <p class="card-text">Category: ${loadMeal.strCategory}</p>
    `
}



loadMeals('fish');
