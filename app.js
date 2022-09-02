const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => showCategories(data.data.news_category))
    .catch(error => console.log('ERROE'))
}

loadCategories()

const showCategories = (categories) => {
    console.log(categories)
    const ul = document.getElementById('categories');

    categories.forEach(categore => {
        const li = document.createElement('li');
        li.innerText = categore.category_name;
        ul.appendChild(li)
    });
   
}