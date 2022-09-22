const base_url = 'https://api.jikan.moe/v3';

function searchAnime(event) {
  event.preventDefault();

  const form = new FormData(this);
  const query = form.get('search');

  fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`) //рабочий фетч
    .then((res) => res.json())
    .then(updateDom)
    .catch((err) => console.warn(err.message));
  form.reset();
}

function updateDom(data) {
  const searchResults = document.getElementById('search-results');
  document.getElementById('search').value = '';
  const animeByCategories = data.results.reduce((acc, anime) => {
    const { type } = anime;
    if (acc[type] === undefined) acc[type] = [];
    acc[type].push(anime);
    return acc;
  }, {});

  searchResults.innerHTML = Object.keys(animeByCategories)
    .map((key) => {
      const animesHTML = animeByCategories[key]
        .sort((a, b) => a.episodes - b.episodes)
        .map((anime) => {
          return `
          
          <div class="cardAnime">
          <div class="">
          <img class="pic" src="${anime.image_url}">
          </div>
          <div class="animeContent">
          <div class="animeName">${anime.title}</div>
          <p class="animeDisc">${anime.synopsis}</p>
          </div>
          <div class="first">
          <a href="${anime.url}">
          <img class="st1" src="../img/stick1.png">
          </a>
          <img class="st3" src="../img/stick3.png">
          </div>
          <img class="ugol" src="../img/ugol.png">
      </div>
      
      `;
        })
        .join('');

      return `
      <section>
          <h3 class="secTitle">-${key.toUpperCase()}-</h3>
          <div class="cardAll">
          <div class="kemicofa-row" id="kemicofa-row">${animesHTML}</div>
          </div>
          </section>

  `;
    })
    .join('');
}

function pageLoaded() {
  const form = document.getElementById('search_form');
  form.addEventListener('submit', searchAnime);
}

window.addEventListener('load', pageLoaded);
