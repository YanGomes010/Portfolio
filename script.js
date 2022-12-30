
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