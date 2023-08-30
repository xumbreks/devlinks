function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('dark')

 // pegar a tag img
 const img = document.querySelector("#profile img")

 // substituir a imagem
 if (html.classList.contains('dark')) {
   // se tiver light mode, adicionar a imagem light
   img.setAttribute("src", "./assets/eu8.png")
 } else {
   // set tiver sem light mode, manter a imagem normal
   img.setAttribute("src", "./assets/eu9.png")
 }
}