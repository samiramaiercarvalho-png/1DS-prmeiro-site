    const botao =document.querySelector("button")
    botao.addEventListener('click', Curtir)

    function curtir (){
        let curtidas = document.querySelector("span")
        curtidas.textContent++;
    }


        // botão do tamanho
        const tamanho = document.getElementById("tamanho")
        tamanho.addEventListener("click", aumentarfonte)
let fonte = 16;
        //FUNÇÃO
        function aumentarfonte(){
            fonte++;
       document.body.style.fontSize = fonte + "px";
        }