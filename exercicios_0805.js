console.log("01-")
function cumprimentar_01 (nome){
    console.log("Olá, " + nome + "!")
}
cumprimentar_01("Rui")
cumprimentar_01("Maria")

console.log("02-")
function converterIdadeEmAnosParaDias_02 (anos) {
    let dias = 365 * anos
    console.log(dias)
}
converterIdadeEmAnosParaDias_02(25)
converterIdadeEmAnosParaDias_02(70)

console.log("03-")
function calcularSalario_03 (horas, salario) {
    let total = horas * salario
    console.log("Salário igual a R$" + total)
}
calcularSalario_03(150, 40.5)

console.log("04-")
function nomeDoMes_04 (numeromes) {
    let nomemes
    const Meses = ["janeiro", "fevereiro", "março", "abril", "maio",
    "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    nomemes = Meses[numeromes-1]
    console.log(nomemes)
}
nomeDoMes_04(1)
nomeDoMes_04(4) 

console.log("05-")
function maiorOuIgual_05 (x, y) {  
    if (typeof x != typeof y)
        console.log(false)
    else if (x>=y)
        console.log(true)
    else console.log(false)
}
maiorOuIgual_05(0, 0)
maiorOuIgual_05(0, "0")
maiorOuIgual_05(5, 1)

console.log("06-")
function inverso_06 (valor) {
    if(typeof valor === "number")
        console.log(-valor)
    else if(typeof valor === "boolean")
        console.log(!valor)
    else console.log("deu " + typeof valor +", nao era esperado")
}
inverso_06(true) 
inverso_06("6") 
inverso_06(-2000) 
inverso_06("programação") 

console.log("07-")
function estaEntre_07 (num, min, max, inc) {
    if (inc){ //ja ta incluido no booleano
        console.log(num <= max && num >= min)
    }
    else {
        console.log(num < max && num > min)
    }
}
estaEntre_07(10, 1, 50) 
estaEntre_07(16, 100, 160) 
estaEntre_07(3, 150, 3) 
estaEntre_07(3, 150, 3, true) 

console.log("08-")
function multiplicar_08 (x, y) {
    let res = 0
    for(var i = 0; i < y; i++){
        res += x;
    }
    console.log(res)
}
multiplicar_08(5, 5)
multiplicar_08(0, 7)

console.log("09-")
function repetir_09 (elemento, vezes) {
    res = []
    for(let i = 0; i<vezes; i++)
        res.push(elemento)
    console.log(res)
}
repetir_09("código", 2)
repetir_09(7, 3) 

console.log("10-")
function simboloMais_10 (vezes) {
    let seq = ""
    for(var i = 0; i < vezes; i++){
        seq+= "+"
    }
    console.log(seq)
}
simboloMais_10(2)
simboloMais_10(4)   

console.log("11-")
function receberPrimeiroEUltimoElemento_11 (vetor) {
    let n = vetor.length
    let res = [vetor[0], vetor[n-1]]
    console.log(res)
}
receberPrimeiroEUltimoElemento_11([7,14,"olá"]) 
receberPrimeiroEUltimoElemento_11([-100, "aplicativo", 16])

console.log("12-")
function removerPropriedade_12 (objeto, propriedade) {
    delete objeto[propriedade]
    console.log(objeto)
}
removerPropriedade_12({a: 1, b: 2}, "a")
removerPropriedade_12({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") 

console.log("13-")
function filtrarNumeros_13 (vetor) {
    res = []
    for(i in vetor)
        if(typeof vetor[i] === "number")
            res.push(vetor[i])
    console.log(res)
}
filtrarNumeros_13(["Javascript", 1, "3", "Web", 20]) 
filtrarNumeros_13(["a", "c"])

console.log("14-")
function objetoParaArray_14 (objeto) {
    console.log(Object.entries(objeto))
}
objetoParaArray_14({
nome: "Maria",
profissao: "Desenvolvedora de software"
}) 
objetoParaArray_14({
codigo: 11111,
preco: 12000
}) 

console.log("15-")
function receberSomenteOsParesDeIndicesPares_15 (vetor) {
    let n = vetor.length
    let res = []
    for(let i = 0; i < n; i += 2) {
        if (vetor[i] % 2 == 0)
            res.push(vetor[i])
    }
    console.log(res)
}
receberSomenteOsParesDeIndicesPares_15([1, 2, 3, 4])
receberSomenteOsParesDeIndicesPares_15([10, 70, 22, 43]) 

console.log("16-")
function checarAnoBissexto_16 (ano) {
    console.log((ano%4==0 && ano%100!=0)||(ano%400==0))
}
checarAnoBissexto_16(2020) 
checarAnoBissexto_16(2100) 

console.log("17-")
function somarNumeros_17 (vetor) {
    let res=0
    for(i in vetor)
        res += vetor[i]
    console.log(res)
}
somarNumeros_17([10, 10, 10]) 
somarNumeros_17([15, 15, 15, 15])

console.log("18-")
function despesasTotais_18 (vetor) {
    let despesa = 0
    for(i in vetor)
        despesa += vetor[i].preco
    console.log(despesa)
}
despesasTotais_18([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150} 
]) 
despesasTotais_18([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) 

console.log("19-")
function calcularMedia_19 (vetor) {
    let res = 0
    let n = 0
    for(i in vetor) {
        res += vetor[i]
        n++
    }
    let media = res/n
    console.log(media)
}
calcularMedia_19([0, 10]) 
calcularMedia_19([1, 2, 3, 4, 5]) 

console.log("20-")
function areaDoTriangulo_20 (base, altura) { /*arredondar*/ 
    let area = base * altura
    area /= 2
    console.log(area.toFixed(2))
}
areaDoTriangulo_20(10, 15) 
areaDoTriangulo_20(7, 9)
areaDoTriangulo_20(9.25, 13.1)

console.log("21-")
function menorNumero_21 (vetor) {
    menor = vetor[0]
    for(i in vetor){
        if(vetor[i]<menor)
        menor = vetor[i]
    }
    console.log(menor)
}
menorNumero_21([10, 5, 35, 65])
menorNumero_21([5, -15, 50, 3])

console.log("22-")
function funcaoDaSorte_22 (escolha) {
    let sorteado
    sorteado = Math.floor(Math.random()*10 + 1)
    if(sorteado===escolha)
        console.log("Parabéns! O número sorteado foi " + sorteado)
    else console.log("Que pena, o número sorteado foi " + sorteado)
}
funcaoDaSorte_22(10) 
funcaoDaSorte_22(5) 
funcaoDaSorte_22(5)

console.log("23-")
function contarPalavras_23 (frase) {
    nova = frase.split(" ") //usa espaco para separar a string da frase
    console.log(nova.length) //em um array, cada elemento separado
    console.log(nova) //poderia usar , - outro e iria separar
}
contarPalavras_23("Sou uma frase") 
contarPalavras_23("Me divirto aprendendo a programar") 

console.log("24-")
function contarCaractere_24 (letra, frase) {
    let cont = 0
    let n = frase.length
    for(let i = 0; i < n; i++)
        if(frase.charAt(i) === letra)
        cont++
    console.log(cont)
}
contarCaractere_24("r", "A sorte favorece os audazes") 
contarCaractere_24("c", "Conhece-te a ti mesmo") 
 
console.log("25-")
function buscarPalavrasSemelhantes_25 (inicio, vetor) {
    res = []
    for(let palavra of vetor)
        if(palavra.includes(inicio))
            res.push(palavra)
    console.log(res)
}
buscarPalavrasSemelhantes_25("pro", ["programação", "mobile", "profissional"])
buscarPalavrasSemelhantes_25("python", ["javascript", "java", "c++"]) 

console.log("26-")
function removerVogais_26 (palavra) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach ( vogal => palavra = palavra.replace(vogal, ""))
    console.log(palavra)
}
removerVogais_26("Cod3r")
removerVogais_26("Fundamentos")
removerVogais_26("olha rui")

console.log("27-")
function inverter_27 (objeto) {
    const invertido = {}  //mesmo nao sendo constante
    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
            valor = 1

        invertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })
    console.log(invertido)
}
inverter_27({ a: 1, b: 2, c: 3}) 

console.log("28-")
function filtrarPorQuantidadeDeDigitos_28 (vetor, digitos) {
    let min = Math.pow(10, digitos-1) - 1
    let max = Math.pow(10, digitos)
    let res = []
    for(i in vetor)
        if (vetor[i] > min && vetor[i] < max)
            res.push(vetor[i])
    console.log(res)
}
filtrarPorQuantidadeDeDigitos_28([38, 2, 365, 10, 125, 11], 2) 
filtrarPorQuantidadeDeDigitos_28([5, 9, 1, 125, 11], 1)

console.log("29-")
function segundoMaior_29 (vetor) {
    let maior = vetor[0]
    for(i in vetor){
        if(vetor[i]>maior)
        maior = vetor[i]
    }
    let maior2
    if(vetor[0] === maior)
        maior2 = vetor[1]
    else maior2 = vetor[0]
    for(i in vetor){
        if(vetor[i]>maior2 && vetor[i] != maior)
        maior2 = vetor[i]
    }
    console.log(maior2)
}
segundoMaior_29([12, 16, 1, 5])
segundoMaior_29([8, 4, 5, 6]) 

console.log("30-")
function recerberMelhorEstudante_30 (desempenhos) {
    let nomes = Object.keys(desempenhos)
    let maiorMedia = 0
    let maiorAluno = ''
    for(i in nomes){
        let media
        let notas = desempenhos[nomes[i]]
        let somas = 0
        for(let j in notas){
            somas += notas[j]
        }
        media = somas / notas.length
        if(media > maiorMedia){
            maiorMedia = media
            maiorAluno = nomes[i]
        }
    }
    console.log({nome: maiorAluno, media: maiorMedia})
}
recerberMelhorEstudante_30({
Joao: [8, 7.6, 8.9, 6],
Mariana: [9, 6.6, 7.9, 8], 
Carla: [7, 7, 8, 9] 
}) 