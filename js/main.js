$(document).ready(function () {
    $(function () {
      $(".bxslider").bxSlider({
        mode: "fade",
        captions: true,
        slideWidth: 1200,
      });
    });
    
     // Posts
  var posts = [
    {
      title: "Viaja con Airbnb",
      content:
        "Airbnb es una compañía que ofrece una plataforma digital dedicada a la oferta de alojamientos a particulares y turísticos (alquiler vacacional) mediante la cual los anfitriones pueden publicitar y contratar el arriendo de sus propiedades con sus huéspedes; anfitriones y huéspedes pueden valorarse mutuamente, como referencia para futuros usuarios. El nombre es un acrónimo de airbed and breakfast.1​ Airbnb tiene una oferta de unas 2 000 000 propiedades en 192 países y 33 000 ciudades. Desde su creación en noviembre de 2008 hasta junio de 2012 se realizaron 10 millones de reservas.2​",
    },
    {
      title: "Covid-19",
      content:
        "Los viajeros procedentes México no tienen que presentar el resultado negativo de una prueba PCR o de antígenos de COVID-19 a su llegada a República Dominicana. Detalles y excepciones Los viajeros ya no tienen que acreditar resultado negativo a una prueba PCR al llegar a la República Dominicana. Es posible que se hagan pruebas respiratorias de COVID-19 aleatorias en los aeropuertos. Los viajeros que presenten tarjeta de vacunación al menos 3 semanas después de la última dosis o acrediten resultado negativo en PCR emitido en las 72 horas previas a la llegada están exentos de la prueba aleatoria.",

    },
  ];
  console.log(posts);

  // Recorrer el JSON para enviar al index.HTML
  posts.forEach((item) => {
    var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <p>
                        ${item.content}
                    </p>
                    <a href="https://www.airbnb.mx/" class="button-more"><button type="button" class="btn btn-dark">Articulo Completo</button></a>
                </article>`;
    //console.log(post);
    $("#posts").append(post);
  });
});
