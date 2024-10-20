const form = document.getElementById("form")

let linhas = "";

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const nome = document.getElementById("nameid").value;
    const age = document.getElementById("ageid").value;


    let linha = "<tr>";
    linha += `<td>${nome}</td>`;  // Use ${nome} para interpolar o valor da variável
    linha += `<td>${age}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

});