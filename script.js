function abrirmenu(){
    let BarraMenuAberto = document.getElementById('barra-menu')
    if(BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "260px";
    }else{
        BarraMenuAberto.style.width = "0px";
    }
}