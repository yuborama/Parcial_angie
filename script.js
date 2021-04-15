window.addEventListener("load", function () {
  fetch("http://demo6497253.mockable.io/noticias/")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("contenido").innerHTML = data
        .map(
          (e) => `
          <h3>${e.titulo}</h3>
          <p class="border">
            ${e.contenido}
            <a href="http://">Ver mas.</a>
          </p>
   `
        )
        .join("");
    });
});