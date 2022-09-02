//Load Categories API
const loadCategories = () => {
  fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then((res) => res.json())
    .then((data) => showCategories(data.data.news_category))
    .catch((error) => console.log("ERROE"));
};

//Call Categories API
loadCategories();
//Show Categories Section
const showCategories = (categories) => {
  const ul = document.getElementById("categories");

  categories.forEach((categore) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <a onclick="showNews('${categore.category_id}')" href="#" >${categore.category_name}</a>
    `;
    ul.appendChild(li);
  });
};

//Load Categories API with ID
const showNews = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res) => res.json())
    .then((data) => showNewsItem(data.data))
    .catch((error) => console.log("ERROE"));
};

//Show News items

const showNewsItem = (news) => {
  const itemsNum = document.getElementById('items-num');
  const num = news.length;
  itemsNum.innerText = `${num} Items Found`
  
  console.log(news);
};
