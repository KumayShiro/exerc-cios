function main(){
    var values = [] //Positive Numbers
    addValue(values)
    var res = totalValue(values)
    console.log(`A soma de todos os valores é ${res}`)
    var md = mdValues(values, res)
    console.log(`A média é de ${md}`)
}
function addValue(arr){
    var n = Number(prompt('Digite um valor: '))
    while(n >= 0){
        arr.push(n)
        n = Number(prompt('Digite outro valor (ou um número menor que zero para encerrar o programa): '))
    }
    return arr
}
function totalValue(arr){
    var total = 0
    for(var i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
function mdValues(arr, tot){
    var md = tot
    md = tot / arr.length
    return md
}
main()