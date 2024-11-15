function abrirFormulario() {
    document.getElementById("formulario").style.display = 'flex';
    document.getElementById("sobrePosiçao").style.display = 'flex'
}
let form = document.getElementById('nomeNumero')
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let nomeContato = document.getElementById("nome").value
    let numeroContato = document.getElementById("numero").value

    let primeiraLetra = nomeContato[0]
    let letra = `<td title="Letra inicial" class="letraInicial"><div>${primeiraLetra}</div></td>`

    let linha = '<tr>'
    linha += `<td>${letra}</td>`
    linha += `<td class="Max">${nomeContato}</td>`
    linha += `<td class="Max1">${numeroContato}</td>`
    linha += `<td>${'<button title="Editar" class="edit">🖌️</button>' }  <button title="Excluir" class="delete">🗑️</button></td>`

    linhas += linha
    
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    document.getElementById("formulario").style.display = 'none';
    document.getElementById("sobrePosiçao").style.display = 'none'

    document.getElementById("nome").value = '';
    document.getElementById("numero").value = '';
})
