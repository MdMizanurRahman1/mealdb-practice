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
        //console.log(meal);

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


loadMeals('fish');
