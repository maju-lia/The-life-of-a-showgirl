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
 