const convertButton = document.querySelector(".botao-convert")
const seletorPimmario=document.querySelector(".moeda-inicial")
const seletorParaConversao = document.querySelector(".converter-para")
function converterValores() {
    if(seletorPimmario.value=="real"){

    const valorInputDigitado = document.querySelector(".input-digitado").value
    const valorDigitado = document.querySelector(".valor-digitado")
    const valorConvertidoMoeda = document.querySelector(".valor-convert")

    console.log(seletorParaConversao.value)

    const dolarHojeFicticio = 5.45
    const euroHojeFicticio = 6.35
    const libraHojeFicticio= 7.31
    const ieneHojeFicticio= 0.037
    const bitcoinHojeFicticio= 603693.66   
    const realHoje= 1.00
    if (seletorParaConversao.value == "dolar") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInputDigitado / dolarHojeFicticio)
    }

    if (seletorParaConversao.value == "euro") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInputDigitado / euroHojeFicticio)
    }
     if (seletorParaConversao.value == "libra") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInputDigitado / libraHojeFicticio)
    }
     if (seletorParaConversao.value =="yene") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valorInputDigitado / ieneHojeFicticio)
    }
    if (seletorParaConversao.value =="bitcoin") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(valorInputDigitado / bitcoinHojeFicticio)
    }
    if (seletorParaConversao.value =="real") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInputDigitado / realHoje)
    }


     valorDigitado.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorInputDigitado)
}





 if(seletorPimmario.value=="dolar"){

    const valorInputDigitado = document.querySelector(".input-digitado").value
    const valorDigitado = document.querySelector(".valor-digitado")
    const valorConvertidoMoeda = document.querySelector(".valor-convert")

    console.log(seletorParaConversao.value)

    const dolarHojeFicticio = 1.00
    const euroHojeFicticio = 1.17
    const libraHojeFicticio= 1.35
    const ieneHojeFicticio= 0.0068
    const bitcoinHojeFicticio= 110852.24  
    const realHoje= 0.18
    if (seletorParaConversao.value == "dolar") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInputDigitado / dolarHojeFicticio)
    }

    if (seletorParaConversao.value == "euro") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInputDigitado / euroHojeFicticio)
    }
     if (seletorParaConversao.value == "libra") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInputDigitado / libraHojeFicticio)
    }
     if (seletorParaConversao.value =="yene") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valorInputDigitado / ieneHojeFicticio)
    }
    if (seletorParaConversao.value =="bitcoin") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(valorInputDigitado / bitcoinHojeFicticio)
    }
    if (seletorParaConversao.value =="real") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInputDigitado / realHoje)
    }


     valorDigitado.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(valorInputDigitado)
}




if(seletorPimmario.value=="euro"){

    const valorInputDigitado = document.querySelector(".input-digitado").value
    const valorDigitado = document.querySelector(".valor-digitado")
    const valorConvertidoMoeda = document.querySelector(".valor-convert")

    console.log(seletorParaConversao.value)

    const dolarHojeFicticio = 0.85
    const euroHojeFicticio = 1.00
    const libraHojeFicticio= 1.15
    const ieneHojeFicticio= 0.0058
    const bitcoinHojeFicticio= 94394.91
    const realHoje= 0.16
    if (seletorParaConversao.value == "dolar") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInputDigitado / dolarHojeFicticio)
    }

    if (seletorParaConversao.value == "euro") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInputDigitado / euroHojeFicticio)
    }
     if (seletorParaConversao.value == "libra") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInputDigitado / libraHojeFicticio)
    }
     if (seletorParaConversao.value =="yene") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valorInputDigitado / ieneHojeFicticio)
    }
    if (seletorParaConversao.value =="bitcoin") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(valorInputDigitado / bitcoinHojeFicticio)
    }
    if (seletorParaConversao.value =="real") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInputDigitado / realHoje)
    }


     valorDigitado.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(valorInputDigitado)
}



if(seletorPimmario.value=="libra"){

    const valorInputDigitado = document.querySelector(".input-digitado").value
    const valorDigitado = document.querySelector(".valor-digitado")
    const valorConvertidoMoeda = document.querySelector(".valor-convert")

    console.log(seletorParaConversao.value)

    const dolarHojeFicticio = 0.74
    const euroHojeFicticio = 0.87
    const libraHojeFicticio= 1.00
    const ieneHojeFicticio= 0.0050
    const bitcoinHojeFicticio= 82068.92 
    const realHoje= 0.14
    if (seletorParaConversao.value == "dolar") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInputDigitado / dolarHojeFicticio)
    }

    if (seletorParaConversao.value == "euro") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInputDigitado / euroHojeFicticio)
    }
     if (seletorParaConversao.value == "libra") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInputDigitado / libraHojeFicticio)
    }
     if (seletorParaConversao.value =="yene") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valorInputDigitado / ieneHojeFicticio)
    }
    if (seletorParaConversao.value =="bitcoin") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(valorInputDigitado / bitcoinHojeFicticio)
    }
    if (seletorParaConversao.value =="real") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInputDigitado / realHoje)
    }


     valorDigitado.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorInputDigitado)
}


if(seletorPimmario.value=="yene"){

    const valorInputDigitado = document.querySelector(".input-digitado").value
    const valorDigitado = document.querySelector(".valor-digitado")
    const valorConvertidoMoeda = document.querySelector(".valor-convert")

    console.log(seletorParaConversao.value)

    const dolarHojeFicticio = 147.07
    const euroHojeFicticio = 172.78
    const libraHojeFicticio= 199.12
    const ieneHojeFicticio= 1.00
    const bitcoinHojeFicticio= 16290505.26 
    const realHoje= 27.18
    if (seletorParaConversao.value == "dolar") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInputDigitado / dolarHojeFicticio)
    }

    if (seletorParaConversao.value == "euro") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInputDigitado / euroHojeFicticio)
    }
     if (seletorParaConversao.value == "libra") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInputDigitado / libraHojeFicticio)
    }
     if (seletorParaConversao.value =="yene") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(valorInputDigitado / ieneHojeFicticio)
    }
    if (seletorParaConversao.value =="bitcoin") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(valorInputDigitado / bitcoinHojeFicticio)
    }
    if (seletorParaConversao.value =="real") {
        valorConvertidoMoeda.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInputDigitado / realHoje)
    }


     valorDigitado.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(valorInputDigitado)

}


}
function seletorSecundario(){
const nomeMoedaConvert=document.querySelector(".moeda-convert")
const ultimaImagem=document.querySelector(".imagem-moeda-convertida")

if(seletorParaConversao.value=="dolar"){
  nomeMoedaConvert.innerHTML="Dólar Americano"
  ultimaImagem.src="assets/download (5).jpeg"
}

if(seletorParaConversao.value=="euro"){
    nomeMoedaConvert.innerHTML="Euro"
    ultimaImagem.src="assets/Slovakia confirmed as ready for euro.jpeg"
}
if(seletorParaConversao.value=="libra"){
    nomeMoedaConvert.innerHTML="Libra Esterlina"
    ultimaImagem.src="assets/istockphoto-115928660-170667a.jpg"
}
if(seletorParaConversao.value=="yene"){
    nomeMoedaConvert.innerHTML="Iene"
    ultimaImagem.src="assets/moeda-brilhante-e-dourada-com-o-simbolo-da-moeda-japonesa-yuan_1017-51844.jpg"
}
if(seletorParaConversao.value=="bitcoin"){
    nomeMoedaConvert.innerHTML="Bitcoin"
    ultimaImagem.src="assets/A shiny golden Bitcoin.jpeg"
}
if(seletorParaConversao.value=="real"){
    nomeMoedaConvert.innerHTML="Real Brasileiro"
    ultimaImagem.src="assets/Dicas de Portugues.jpeg"
}

converterValores(  )
}

function seletor(){
const penultimaMoeda=document.querySelector(".moeda")
const penultimaImagem=document.querySelector(".penultima")

if(seletorPimmario.value=="dolar"){
  penultimaMoeda.innerHTML="Dólar Americano"
  penultimaImagem.src="assets/download (5).jpeg"
}

if(seletorPimmario.value=="euro"){
   penultimaMoeda.innerHTML="Euro"
    penultimaImagem.src="assets/Slovakia confirmed as ready for euro.jpeg"
}
if(seletorPimmario.value=="libra"){
    penultimaMoeda.innerHTML="Libra Esterlina"
    penultimaImagem.src="assets/istockphoto-115928660-170667a.jpg"
}
if(seletorPimmario.value=="yene"){
    penultimaMoeda.innerHTML="Iene"
    penultimaImagem.src="assets/moeda-brilhante-e-dourada-com-o-simbolo-da-moeda-japonesa-yuan_1017-51844.jpg"
}
if( seletorPimmario.value=="bitcoin"){
    penultimaMoeda.innerHTML="Bitcoin"
    penultimaImagem.src="assets/A shiny golden Bitcoin.jpeg"
}
if(seletorPimmario.value=="real"){
    penultimaMoeda.innerHTML="Real Brasileiro"
    penultimaImagem.src="assets/Dicas de Portugues.jpeg"

}
}


seletorPimmario.addEventListener("change", seletor)
seletorParaConversao.addEventListener("change",seletorSecundario)
convertButton.addEventListener("click", converterValores)