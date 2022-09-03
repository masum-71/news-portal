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
    spinner(true)
};

//Show News items

const showNewsItem = (items) => {

  //show founded item numbers
  const itemsNum = document.getElementById("items-num");
  const num = items.length;
  itemsNum.innerText = `${num <= 0 ? 'No data found' : num + ' items found'}`;
  //sorted by most viewes
  const totalView = items.sort((a, b) => b.total_view - a.total_view);

  //News items in main section
  const newsItems = document.getElementById("news-items");
  newsItems.innerHTML = "";
  items.forEach((item) => {
    console.log(item);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card mb-3">
    <div class="d-flex justify-content-center">
      <img style="height: 200px; width: 200px;" src="${
        item.thumbnail_url
      }" class="card-img-top" alt="...">
    </div>
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.details.substring(0, 200)}...</p>
      <div class="d-md-flex text-center align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <img class="rounded-circle" style="height: 50px; width: 50px;" src="${
                item.author.img
              }" alt="">
            </div>
            <div>
              <p>${
                item.author.name === null
                  ? `Information not found`
                  : item.author.name
              }</p>
              <p>${item.author.published_date}</p>
            </div>
          </div>
          <div><i class="fa-regular fa-eye me-2"></i>${
            item.total_view === null ? `Information not found` : item.total_view
          }</div>
          <div>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div>
            <button class="btn btn-primary">View Detailes</button>
          </div>
        </div>
    </div>
  </div>
    `;
    newsItems.appendChild(div);
  });
  spinner(false)
};


//Spinner added
const spinner = isLoading  => {
  const spinner = document.getElementById('spinner')
  if(isLoading){
    spinner.classList.remove('d-none')
  }else{
    spinner.classList.add('d-none')
  }
}
