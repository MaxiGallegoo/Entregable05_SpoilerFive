class Player{
    constructor (){
       this.slider= document.querySelector("#js-slidertiempo");
       this.tiempo1=document.querySelector("#js-time1");
       this.tiempo2=document.querySelector("#js-time2");
       this.caratula=document.querySelector("#js-caratula");
       this.tiempoactual=0;
       this.titulo=document.querySelectorAll(".js-titulo-player");
       this.autor=document.querySelectorAll(".js-autor-player");
    }

    reproducir(cancion){
        this.slider.value=0;
        this.slider.min=0;
        this.slider.max=cancion.duracion;
        this.tiempoactual=0;
        this.tiempo1.innerHTML="00:00";
        let t2={
            min:Math.floor(cancion.duracion/60),
            seg:cancion.duracion%60
        }
        if (t2.min<10)
            t2.min="0"+t2.min;
        if (t2.seg<10)
        t2.seg="0"+t2.seg;
        this.tiempo2.innerHTML=t2.min+":"+t2.seg;
        this.caratula.src=cancion.imagen;
        this.titulo.forEach(element => {
            element.innerHTML=cancion.nombre_cancion;
        });
        this.autor.forEach(element => {
            element.innerHTML=cancion.artista;
        });
    }

    avanzar1seg(e){
        e.tiempoactual++;
        e.slider.value++;
        let t2={
            min:Math.floor(e.tiempoactual/60),
            seg:e.tiempoactual%60
        }
        if (t2.min<10)
            t2.min="0"+t2.min;
        if (t2.seg<10)
        t2.seg="0"+t2.seg;
        e.tiempo1.innerHTML=t2.min +":"+ t2.seg;
    }

}