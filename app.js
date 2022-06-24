const formulario = document.forms.namedItem("dados");
const corpoTabela = document.getElementById("corpoTabela");
const cabecalhoTabela = document.getElementById("cabecalhoTabela");
const botaoAbreModal = document.getElementById("abreModal");
const consulta = document.getElementById("consulta");
const botaoFechaModal = document.getElementById("fechaModal");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const cabecalho = {
        nomecompleto: "Nome Completo",
        telefone: "Telefone",
        especialidade: "Especialidade",
        data: "Data"
    }

    const agendamento = {
        nomecompleto: formulario.nome.value,
        telefone: formulario.telefone.value,
        especialidade: formulario.especialidade.value,
        data: formulario.data.value
    }

    cabecalhoTabela.innerHTML = templateLinha(cabecalho);
    corpoTabela.innerHTML += templateLinha(agendamento);
})

function templateLinha(agendamento) {
    return `
        <tr>
            <td> ${agendamento.nomecompleto}</td>
            <td> ${agendamento.telefone}</td>
            <td> ${agendamento.especialidade}</td>
            <td> ${agendamento.data}</td>
        </tr>  
    `
}

function limpaForm() {
    formulario.reset();
    formulario.nome.focus();
}

botaoAbreModal.addEventListener ("click", () => {
    consulta.style.display = "flex";
    document.body.style.backgroundColor = "#f8f8ff"
})

botaoFechaModal.addEventListener ("click", () => {
    consulta.style.display = "none"
    document.body.style.backgroundColor = "white"
})

