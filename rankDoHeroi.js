
function rankOfPlayer(wins, loses){
    let rankBalance = wins - loses;
    return rankBalance;
}

let totalBalance = rankOfPlayer(109,5)

if (totalBalance <=10){
    console.log("O Herói tem de saldo de " + totalBalance + " está no nível de Ferro")
} else if (totalBalance >= 11 && totalBalance <=20 ){
    console.log("O Herói tem de saldo de " + totalBalance + " está no nível de Bronze")
}
else if (totalBalance >= 21 && totalBalance <=50 ){
    console.log("O Herói tem de saldo de " + totalBalance + " está no nível de Prata")
}
else if (totalBalance >= 51 && totalBalance <= 80 ){
    console.log("O Herói tem de saldo de " + totalBalance + " está no nível de Ouro")
}
else if (totalBalance >= 81 && totalBalance <= 90 ){
    console.log("O Herói tem de saldo de " + totalBalance + " está no nível de Diamante")
}
else if (totalBalance >= 91 && totalBalance <=100 ){
    console.log("O Herói tem de saldo de " + totalBalance + " está no nível de Lendário")
}
else if (totalBalance > 100 ){
    console.log("O Herói tem de saldo de " + totalBalance + " está no nível de Imortal")
}