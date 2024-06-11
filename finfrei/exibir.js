import prompt from "prompt-sync"
const ler = prompt()

console.log(`informe seu saldo`);
let saldo = Number(ler())

console.log(`oq deseja fazer?`);
let desejo = ler();

if(desejo == "depositar"|| "sacar" || "saldo"){

}
else if(desejo == "sair"){

}

