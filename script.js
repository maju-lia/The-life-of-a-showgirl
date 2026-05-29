const transition = document.querySelector(".transition");

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const destino = this.href;

        if(destino.includes("#")) return;

        e.preventDefault();

        transition.classList.add("ativo");

        setTimeout(() => {

            window.location.href = destino;

        }, 500);

    });

});
const container =
document.getElementById("glitter-cantos");

function criarGlitter(){

    const glitter =
    document.createElement("div");

    glitter.classList.add("glitter");

    /* ESCOLHE CANTO */

    const canto = Math.floor(Math.random() * 4);

    if(canto === 0){

        /* ESQUERDA */

        glitter.style.left =
        Math.random() * 120 + "px";

        glitter.style.top =
        Math.random() * window.innerHeight + "px";

    }

    else if(canto === 1){

        /* DIREITA */

        glitter.style.right =
        Math.random() * 120 + "px";

        glitter.style.top =
        Math.random() * window.innerHeight + "px";

    }

    else if(canto === 2){

        /* TOPO */

        glitter.style.top =
        Math.random() * 120 + "px";

        glitter.style.left =
        Math.random() * window.innerWidth + "px";

    }

    else{

        /* BAIXO */

        glitter.style.bottom =
        Math.random() * 120 + "px";

        glitter.style.left =
        Math.random() * window.innerWidth + "px";

    }

    /* TAMANHO */

    const tamanho =
    Math.random() * 8 + 4;

    glitter.style.width =
    tamanho + "px";

    glitter.style.height =
    tamanho + "px";

    /* TEMPO */

    glitter.style.animationDuration =
    Math.random() * 4 + 3 + "s";

    container.appendChild(glitter);

    setTimeout(() => {

        glitter.remove();

    }, 7000);

}

const carousel =
document.getElementById("carousel");

let scroll = 0;

function animar(){

    scroll += 1;

    carousel.style.transform =
    `translateX(-${scroll}px)`;

    /* REINICIA */

    if(scroll >= 1000){

        scroll = 0;

    }

    requestAnimationFrame(animar);

}

animar(); 