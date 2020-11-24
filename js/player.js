class Player{
    constructor (){
       this.slider= document.querySelector("#js-slidertiempo");
       this.tiempo1=document.querySelector("#js-time1");
       this.tiempo2=document.querySelector("#js-time2");
       this.caratula=document.querySelector("#js-caratula");
       this.tiempoactual=0;
       this.titulo=document.querySelectorAll(".js-titulo-player");
       this.autor=document.querySelectorAll(".js-autor-player");
       this.calificacion=document.querySelector("#js-player-rate-bar");
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
        this.cargarEstrellas(cancion);
    }

    cargarEstrellas(cancion){
        let divEstrellas=this.calificacion;
        let estrella1=document.createElement("IMG");
        if (cancion.calificacion>=1){
            estrella1.src="../img/Iconos/Base/EstrellaLlena.svg";
            if(cancion.valorada){
                estrella1.src="../img/Iconos/Base/EstrellaLlenaDorada.svg";
            }
        }
        else
            estrella1.src="../img/Iconos/Base/Estrella.svg";
        let estrella2=document.createElement("IMG");
        if (cancion.calificacion>=2){
            estrella2.src="../img/Iconos/Base/EstrellaLlena.svg";
            if(cancion.valorada)
                estrella2.src="../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
            else
                estrella2.src="../img/Iconos/Base/Estrella.svg";
        let estrella3=document.createElement("IMG");
        if (cancion.calificacion>=3){
            estrella3.src="../img/Iconos/Base/EstrellaLlena.svg";
            if(cancion.valorada)
                estrella3.src="../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
            else
                estrella3.src="../img/Iconos/Base/Estrella.svg";
        let estrella4=document.createElement("IMG");
        if (cancion.calificacion>=4){
            estrella4.src="../img/Iconos/Base/EstrellaLlena.svg";
            if(cancion.valorada)
                estrella4.src="../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
            else
                estrella4.src="../img/Iconos/Base/Estrella.svg";
        let estrella5=document.createElement("IMG");
        if (cancion.calificacion==5){
            estrella5.src="../img/Iconos/Base/EstrellaLlena.svg";
            if(cancion.valorada)
                estrella5.src="../img/Iconos/Base/EstrellaLlenaDorada.svg";
        }
            else
                estrella5.src="../img/Iconos/Base/Estrella.svg";
        if (this.calificacion!=null)
            this.calificacion.innerHTML="";
        this.calificacion.appendChild(estrella1);
        this.calificacion.appendChild(estrella2);
        this.calificacion.appendChild(estrella3);
        this.calificacion.appendChild(estrella4);
        this.calificacion.appendChild(estrella5);

       // DEJO COMENTADO PORQUE ROMPE PERO AGREGA LAS FUNCIONES DE HOVER PARA CALIFICAR

        // let f0=function(){
        //         for (let i=0;i<divEstrellas.children.length;i++){
        //             divEstrellas.children[i].src="../img/Iconos/Base/Estrella.svg";
        //         }
        //         divEstrellas.children[0].src="../img/Iconos/Base/EstrellaLlena.svg";
        //     }
        // let f01=function(){
        //         cancion.valorada=true;
        //         cancion.calificacion=1;
        //     }
        // let f1=function(){
        //         for (let i=0;i<divEstrellas.children.length;i++){
        //             divEstrellas.children[i].src="../img/Iconos/Base/Estrella.svg";
        //         }
        //         divEstrellas.children[0].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[1].src="../img/Iconos/Base/EstrellaLlena.svg";
        //     }
        // let f11=function(){
        //         cancion.valorada=true;
        //         cancion.calificacion=2;
        //     }
        // let f2=function(){
        //         for (let i=0;i<divEstrellas.children.length;i++){
        //             divEstrellas.children[i].src="../img/Iconos/Base/Estrella.svg";
        //         }
        //         divEstrellas.children[0].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[1].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[2].src="../img/Iconos/Base/EstrellaLlena.svg";
        //     }
        // let f21=function(){
        //     cancion.valorada=true;
        //     cancion.calificacion=3;
        // }
        // let f3=function(){
        //         for (let i=0;i<divEstrellas.children.length;i++){
        //             divEstrellas.children[i].src="../img/Iconos/Base/Estrella.svg";
        //         }
        //         divEstrellas.children[0].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[1].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[2].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[3].src="../img/Iconos/Base/EstrellaLlena.svg";
        //     }
        // let f31=function(){
        //         cancion.valorada=true;
        //         cancion.calificacion=4;
        //     }
        // let f4=function(){
        //         for (let i=0;i<divEstrellas.children.length;i++){
        //             divEstrellas.children[i].src="../img/Iconos/Base/Estrella.svg";
        //         }
        //         divEstrellas.children[0].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[1].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[2].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[3].src="../img/Iconos/Base/EstrellaLlena.svg";
        //         divEstrellas.children[4].src="../img/Iconos/Base/EstrellaLlena.svg";
        //     }
        // let f41=function(){
        //         cancion.valorada=true;
        //         cancion.calificacion=5;
        //     }
        // let x=function(){this.cargarEstrellas(cancion)}
        // this.calificacion.removeEventListener("mouseleave", x.bind(this));
        
        // this.calificacion.children[0].removeEventListener("mouseover", f0);
        // this.calificacion.children[0].removeEventListener("click", f01);
        // this.calificacion.children[1].removeEventListener("mouseover", f1);
        // this.calificacion.children[1].removeEventListener("click", f11);
        // this.calificacion.children[2].removeEventListener("mouseover", f2);
        // this.calificacion.children[2].removeEventListener("click", f21);
        // this.calificacion.children[3].removeEventListener("mouseover", f3);
        // this.calificacion.children[3].removeEventListener("click", f31);
        // this.calificacion.children[4].removeEventListener("mouseover", f4);
        // this.calificacion.children[4].removeEventListener("click", f41);
        // if (!cancion.valorada){
        //     this.calificacion.children[0].addEventListener("mouseover", f0);
        //     this.calificacion.children[0].addEventListener("click", f01);
        //     this.calificacion.children[1].addEventListener("mouseover", f1);
        //     this.calificacion.children[1].addEventListener("click", f11);
        //     this.calificacion.children[2].addEventListener("mouseover", f2);
        //     this.calificacion.children[2].addEventListener("click", f21);
        //     this.calificacion.children[3].addEventListener("mouseover", f3);
        //     this.calificacion.children[3].addEventListener("click", f31);
        //     this.calificacion.children[4].addEventListener("mouseover", f4);
        //     this.calificacion.children[4].addEventListener("click", f41);
        //     let x=function(){this.cargarEstrellas(cancion)}
        //     this.calificacion.addEventListener("mouseleave", x.bind(this));
        // }
        //
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