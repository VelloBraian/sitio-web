//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
    menu.style.display = "block";
    menu_visible = true;
}
else{
    menu.style.display = "none";
    menu_visible = false;
}
}
function agrandar(){
    document.getElementById("estadoDeCuentas").style.display = "block";
}

function minimizar(){
    document.getElementById("estadoDeCuentas").style.display = "none";
}
//---------------------------------------------------------------------------
function mostrar(){
    document.getElementById("perfil").style.display = "block";
}

function ocultar(){
    document.getElementById("perfil").style.display = "none";
}

//relog de la ventana de contacto y asistencias-------------------
const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["January","Febrary","March","April","May","June",
                    "July","August","September","Octuber","November","December"];

const interval = setInterval(() => {

    const local = new Date();

    let day = local.getDate(),
        month = local.getMonth(),
        years = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${years}`;

}, 1000);