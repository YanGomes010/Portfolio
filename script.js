

window.addEventListener('resize', function () {
    //var altura = window.innerHeight;
    var largura = window.innerWidth;

    if (largura < 768) {
       let sec = document.querySelector('#sec-first')
       sec.classList.remove("p-5")
       let img = document.querySelector("#tt")
       img.classList.remove("img-base-teclado")
       img.classList.add("img-base-teclado-768")
}});














function ThemeMode(){
    const textos = document.querySelector("#textos")
            var element = document.body;
            element.classList.toggle("dark-mode");
            textos.classList.toggle("darkmode-color")
}

   function teste(){
    const divCinza = document.querySelector(".offcanvas-backdrop")
    divCinza.parentNode.removeChild(divCinza)
    var f = document.getElementById("navbarOffcanvasLg");
    f.classList.remove("show");
    f.removeAttribute("aria-modal")
    f.removeAttribute("role")
   }