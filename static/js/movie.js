const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWMwNzBhZmFhZGJlZjU3MWVkYjJmN2MwZTNjNWEyNyIsInN1YiI6IjY0NzMxNjI3YTE5OWE2MDBmOTQyOTRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YD9kq4wZPWi3aqddHXfjNDXh10UlaZ3SLjkBJ-5Sjwo'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    let rows = data['results']
    rows.forEach((a) => {
      let title = a['title']
      let overview = a['overview']
      let image = "https://image.tmdb.org/t/p/w200/" + a['poster_path']
      let vote_average = a['vote_average']
      let temp_html = 
      `<div>
        <h2> ${title} </h2>
        <img src="${image}" class="poster_path">
        <div> ${overview} </div>
        <div> ${vote_average} </div>
      </div>`
      document.getElementById("cards").insertAdjacentHTML('beforeend', temp_html);
    })
  })