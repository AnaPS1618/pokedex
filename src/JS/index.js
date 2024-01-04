let personagens = [
    {
        id: 1,
        nome: 'pokemon-01',
        img: '../src/img/001.png',
        evolucao: [
            {
                id: 1,
                nome: 'evolucao-01',
                img: '../src/img/002.png'
            },
            {
                id: 2,
                nome: 'evolucao-02',
                img: '../src/img/003.png'
            }
        ]
    },
    {
        id: 2,
        nome: 'pokemon-02',
        img: '../src/img/004.png',
        evolucao: [
            {
                id: 1,
                nome: 'evolucao-01',
                img: '../src/img/005.png'
            },
            {
                id: 2,
                nome: 'evolucao-02',
                img: '../src/img/006.png'
            }
        ]
    },
    {
        id: 3,
        nome: 'pokemon-03',
        img: '../src/img/007.png',
        evolucao: [
            {
                id: 1,
                nome: 'evolucao-01',
                img: '../src/img/008.png'
            },
            {
                id: 2,
                nome: 'evolucao-02',
                img: '../src/img/009.png'
            }
        ]
    }
]

let imagem = document.querySelector('#imagem')
let proximo = document.querySelector('#proximo')
let anterior = document.querySelector('#anterior')

let contadorIndex = 0
let valorID;

proximo.addEventListener('click', () => {
    if(contadorIndex < personagens.length){
        let perosnagemAtual = personagens[contadorIndex]
        visualizandoPersonagem(perosnagemAtual)
        contadorIndex++
        console.log('próximo ' + contadorIndex)
    }
})

anterior.addEventListener('click', () => {
    if(contadorIndex  > 0){
        contadorIndex--
        let perosnagemAtual = personagens[contadorIndex]
        visualizandoPersonagem(perosnagemAtual)
        console.log('anterior ' + contadorIndex)
    }
})

visualizandoPersonagem = (personagem) => {
    imagem.innerHTML = ''


        imagem.innerHTML += `
        <div>
            <img src="${personagem.img}" />
        </div>
    `
    
}