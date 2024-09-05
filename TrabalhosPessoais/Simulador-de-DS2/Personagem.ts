let reader = require('readline-sync')

class Personagem {
    nome: string
    altura: number
    peso: number
    vidaMAX: number
    vidaAtual: number
    classeInicial: string
    cargaMAXkg: number
    PTvigor: number
    PTresistencia: number
    PTvitalidade: number
    PTsintonização: number
    PTforça: number
    PTdestreza: number
    PTadaptabilidade: number
    PTinteligencia: number
    PTfé: number
    equipMdireita: string
    equipMesquerda: string
    
    constructor(nome: string, altura: number, peso: number, vidaMaxima: number, vidaAtual: number, classeInicial: string, cargaMaxima: number, vigor: number, resistencia: number, vitalidade: number, PTsintonização: number, força: number, destreza: number, adaptabilidade: number, inteligencia: number, fé: number, equipMdeireita: string, equipMesquerda: string){
        this.nome = nome
        this.altura = altura
        this.peso = peso
        this.vidaMAX = vidaMaxima
        this.vidaAtual = vidaAtual
        this.classeInicial = classeInicial
        this.cargaMAXkg = cargaMaxima
        this.PTvigor = vigor
        this.PTresistencia = resistencia
        this.PTvitalidade = vitalidade
        this.PTsintonização = PTsintonização
        this.PTforça = força
        this.PTdestreza = destreza
        this.PTadaptabilidade = adaptabilidade
        this.PTinteligencia = inteligencia
        this.PTfé = fé
        this.equipMdireita = equipMdeireita
        this.equipMesquerda = equipMesquerda
    }

    setPersonagem():void {
        let alturaUP = reader.question("Qual a sua altura em centrimetros? ")
        this.altura = alturaUP
        let pesoUP = reader.question("Em Kilos, quanto que voçê pesa? ")
        this.peso = pesoUP
        
        let nomeUP = reader.question("E o seu nome, você se lembra dele? ")
        this.nome = nomeUP
        console.log("Hó Hó Hó, parece que não perdeu tudo, ainda.");
        
    }
}

class 