const listadepecas = ["Ar condicionado","Motor","Amortecedor"]

console.log(listadepecas)

if(listadepecas.length <10) {
    console.log("é possivel cadastrar mais pecas")
} else {
    console.log("não há mais espeço na lista")
}

var peso = 50;

if(peso >=100) {
    console.log("peso da peça está adequado")
} else {
    console.log("peso insuficiente")
}

let nomepeca ="disco de freio";

if (nomepeca.length > 3) {
   console.log("nome adequado") 
} else if(nomepeca.length == 0) {
console.log("o nome não pode ser vazio")
} else {
    console.log("o nome deve possuir mais de 3 caracteres")
}

switch (nomepeca.length) {
    case 0:
      console.log("o nome nao pode ser vazio")  
        break;

        case 1:
            case 2:
                case 3:
                    console.log("o nome deve possuir mais de 3 caracteres")
                    break;
    default:
        console.log("nome adequado")
        
        break;
}
 


 




 

    

    
 
 
 

