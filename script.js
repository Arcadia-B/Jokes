const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
  const config = {
    headers: {
      Accept: "Application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config)
    .then((Response) => Response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}
