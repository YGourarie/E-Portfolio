const movieListEl = document.querySelector(".movies");
const inputValue = document.body.querySelector(".search__bar")
let searchKey = "band"

function getInput() {
    renderPosts(inputValue.value)
}

function search(event) {
  renderPosts(event.target.value)
}

async function renderPosts(searchKey) {
  const posts = await fetch(`https://www.omdbapi.com/?apikey=f9cc5fd8&s=${searchKey}`)
  const postsData = await posts.json()
  console.log(postsData.Search)
  movieListEl.innerHTML = postsData.Search.map(post => postHTML(post)).join("");
}

function postHTML (post) {
    return `<div class="movie">
    <figure class="movie__img">
        <img src="${post.Poster}" alt="">
    </figure>
    <div class="movie__info">
        <h3 class="movie__info--title">Title: ${post.Title}</h3>
        <h3 class="movie__info--year">Release Year: ${post.Year}</h3>
    </div>
</div>`
}

renderPosts(searchKey);