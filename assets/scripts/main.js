const inputCep = document.querySelector("#cep")

const searchCep = function(item){
    for(result in item){
        if(document.querySelector("#"+result)){
            document.querySelector("#"+result).value = item[result]
        }
    }
}

inputCep.addEventListener("blur", ()=>{
    cep = inputCep.value.replace("-","")

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => searchCep(data))
        .catch(e => alert(`Ops, algo não saiu como esperado! Erro:${e}`))
})

