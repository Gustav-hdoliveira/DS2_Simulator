let reader = require('readline-sync')

class Personagem {
    nome: string
    altura: number
    peso: number
    level: number
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
    
    constructor(nome: string, altura: number, peso: number, level: number, vidaMaxima: number, vidaAtual: number, classeInicial: string, cargaMaxima: number, vigor: number, resistencia: number, vitalidade: number, PTsintonização: number, força: number, destreza: number, adaptabilidade: number, inteligencia: number, fé: number, equipMdeireita: string, equipMesquerda: string){
        this.nome = nome
        this.altura = altura
        this.peso = peso
        this.level = level
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
        console.log()
        let alturaUP = reader.question("Qual a sua altura, em centrimetros? ")
        this.altura = alturaUP
        let pesoUP = reader.question("Em Kilos, quanto que voçê pesa? ")
        this.peso = pesoUP
        
        let nomeUP = reader.question("E o seu nome, você se lembra dele? ")
        this.nome = nomeUP
        console.log("Hó Hó Hó, parece que não perdeu tudo, ainda.");
        
    }

    setClasseInicial(escolha: number):void {
        switch (escolha) {
            case 1:
                console.log(guerreiro)
                break;
            case 2:
                console.log(cavaleiro)
                break;
            case 3:
                console.log(espadachim)
                break;
            case 4:
                console.log(bandido)
                break;
            case 5:
                console.log(clerigo)
                break;
            case 6:
                console.log(feiticeiro)
                break;
            case 7:
                console.log(explorador)
                break;
            case 8:
                console.log(depravado)
                break;
        
            default:
                console.log("inserido incorretamente")
                break;
        }
    }
}

class ClasseInicial {
    nome: string
    level: number
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
    
    constructor(nome: string, level: number, vigor: number, resistencia: number, vitalidade: number, PTsintonização: number, força: number, destreza: number, adaptabilidade: number, inteligencia: number, fé: number, equipMdeireita: string, equipMesquerda: string){
        this.nome = nome
        this.level = level
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

    getClasses():void{
        console.log(guerreiro)
        console.log(cavaleiro)
        console.log(espadachim)
        console.log(bandido)
        console.log(clerigo)
        console.log(feiticeiro)
        console.log(explorador)
        console.log(depravado)
    }
    
}

let guerreiro = new ClasseInicial("Guerreiro", 12, 7, 6,6,	5,	15,	11,	5,	5,	5, "Broken Straight Sword", "Iron Parma")
let cavaleiro = new ClasseInicial('Cavaleiro',	13,	12,	6,	7,	4,	11,	8,	9,	3,	6, "Broadsword", "nenhuma")
let espadachim = new ClasseInicial('Espadachim',	12,	4,	8,	4,	6,	9,	16,	6,	7,	5, "scimitar +1", "shortsword +1")
let bandido = new ClasseInicial('Bandido',11,9,7,11,	2,	9,14,3,	1,	8, "Hand axe", "Short bow")
let clerigo = new ClasseInicial('Clerigo',	14,	10,	3,	8,	10,	11,	5,	4,	4,	12, "Mace", "Sino sagrado do clérigo")
let feiticeiro = new ClasseInicial('Feiticeiro', 11,	5,	6,	5,	12,	3,	7,	8,	14,	4, "Adaga", "Cajado do feiticeiro")
let explorador = new ClasseInicial('Explorador',10,	7,	6,	9,	7,	6,	6,	12,	5,	5, "Adaga", "nenhuma")
let depravado = new ClasseInicial("Depravado", 	1,	6,	6,	6,	6,	6,	6,	6,	6,	6, "Nenhuma", "Nenhuma")
