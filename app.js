function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById ("campo-pesquisa").value

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

if (!campoPesquisa){
    section.innerHTML = "Nada foi encontrado, tente novamente."
    return
}

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}
            </p> <a href=${dado.link} 
            target="_blank">Mais informações</a>
        </div>
        `;
        }
     }

if (!resultados){
    resultados = "Nada foi encontrado"
}

    section.innerHTML = resultados
}
