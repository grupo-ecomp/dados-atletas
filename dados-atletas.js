class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calcularCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";  
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }   
    calcularMediaValida() {
        let notasOrdenadas = this.notas.sort(function(a,b){
            return a-b;
        });
        
        let notasValidas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
        
        let soma = 0;
        notasValidas.forEach(function(nota){
            soma += nota;
        });
        
        let media = soma / notasValidas.length;
        return media;
    }
    obtemNomeAtleta() {
        return this.nome;

    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }
    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemCategoriaAtleta() {
        return this.calcularCategoria();
    }
    obtemIMCAtleta() {
        return this.calcularIMC();
    }
    obtemMediaValida() {
        return this.calcularMediaValida();
    }

}


// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta()); 
console.log("Altura: " + atleta.obtemAlturaAtleta());  
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoriaAtleta());
console.log("IMC: " + atleta.obtemIMCAtleta());
console.log("Média Válida: " + atleta.obtemMediaValida());