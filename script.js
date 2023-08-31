var listaFilmes = [
  "https://br.web.img2.acsta.net/pictures/210/544/21054460_2013103118041242.jpg",
  "http://d3ugyf2ht6aenh.cloudfront.net/stores/148/504/products/starwars51-766c985654f751b8d415284195337520-640-0.jpg",
  "https://m.media-amazon.com/images/I/91J7VHbAwBL._AC_SY550_.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
